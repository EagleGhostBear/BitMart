import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [inquiriesPerPage] = useState(7);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedInquiry, setEditedInquiry] = useState({
    type: '',
    subType: '',
    title: '',
    content: ''
  });
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/inquiries');
      setInquiries(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleToggleInquiry = (inquiry) => {
    if (selectedInquiry && selectedInquiry.id === inquiry.id) {
      setSelectedInquiry(null);
    } else {
      setSelectedInquiry(inquiry);
    }
  };

  const handleDeleteInquiry = async (inquiryId) => {
    try {
      await axios.delete(`http://localhost:9000/api/inquiries/${inquiryId}`);
      fetchInquiries();
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleUpdateInquiry = (inquiry) => {
    setModalVisible(true);
    setEditedInquiry(inquiry);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setEditedInquiry({
      type: '',
      subType: '',
      title: '',
      content: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedInquiry((prevInquiry) => ({
      ...prevInquiry,
      [name]: value
    }));
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:9000/api/inquiries/${selectedInquiry.id}`, editedInquiry);
      fetchInquiries();
      setModalVisible(false);
      setEditedInquiry({
        type: '',
        subType: '',
        title: '',
        content: ''
      });
      setPopupVisible(true); // 수정 완료 팝업 표시
      setTimeout(() => {
        setPopupVisible(false); // 일정 시간 후 팝업 닫기
      }, 2000);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  // Pagination
  const indexOfLastInquiry = currentPage * inquiriesPerPage;
  const indexOfFirstInquiry = indexOfLastInquiry - inquiriesPerPage;
  const currentInquiries = inquiries.slice(indexOfFirstInquiry, indexOfLastInquiry);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ width: '800px', marginTop: '-130px', marginLeft: '120px' }}>
      <h2 style={{ textAlign: 'left', marginTop: '0px' }}>1:1 문의</h2>
      <hr style={{ borderWidth: '1.5px', borderColor: 'black' }} />
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>제목</th>
          </tr>
          <hr style={{ width: 800 }}></hr>
        </thead>
        <tbody>
          {currentInquiries.map((inquiry) => (
            <React.Fragment key={inquiry.id}>
              <tr
                onClick={() => handleToggleInquiry(inquiry)}
                className={selectedInquiry && selectedInquiry.id === inquiry.id ? 'selected' : ''}
              >
                {selectedInquiry && selectedInquiry.id === inquiry.id ? (
                  <>
                    <td>{inquiry.title}</td>
                  </>
                ) : (
                  <td colSpan="3">{inquiry.title}</td>
                )}
              </tr>
              {selectedInquiry && selectedInquiry.id === inquiry.id && (
                <tr>
                  <td colSpan="5" style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
                    <p>
                      <strong>유형:</strong> {inquiry.type} {'<'}
                      <strong>상세 유형:</strong> {inquiry.subType}
                    </p>
                    <p>
                      <strong>내용:</strong> {inquiry.content}
                    </p>
                    <button style={{ marginLeft: '710px', backgroundColor: 'rgb(95, 0, 128)',color: 'white', borderColor: 'none' }} onClick={() => handleUpdateInquiry(inquiry)}>
                      수정
                    </button>
                    <button style={{  backgroundColor: 'rgb(95, 0, 128)',color: 'white', borderColor: 'none' }} onClick={() => handleDeleteInquiry(inquiry.id)}>삭제</button>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)}>
          이전
        </button>
        {Array.from({ length: Math.ceil(inquiries.length / inquiriesPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            style={{ margin: '0 5px' }}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button disabled={currentPage === Math.ceil(inquiries.length / inquiriesPerPage)} onClick={() => paginate(currentPage + 1)}>
          다음
        </button>
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h3>문의 수정</h3>
            <form onSubmit={handleModalSubmit}>
              <label>
                유형:
                <input type="text" name="type" value={editedInquiry.type} onChange={handleInputChange} />
              </label>
              <br />
              <label>
                하위 유형:
                <input type="text" name="subType" value={editedInquiry.subType} onChange={handleInputChange} />
              </label>
              <br />
              <label>
                제목:
                <input type="text" name="title" value={editedInquiry.title} onChange={handleInputChange} />
              </label>
              <br />
              <label>
                내용:
                <input type="text" name="content" value={editedInquiry.content} onChange={handleInputChange} />
              </label>
              <br />
              <button type="submit">수정하기</button> 
            </form>
            <button onClick={handleModalClose}>닫기</button>
          </div>
        </div>
      )}

      {popupVisible && (
        <div className="popup">
          <p>수정이 완료되었습니다.</p>
        </div>
      )}

      <style>
        {`
          .modal {
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.4);
          }

          .modal-content {
            background-color: white;
            margin: 10% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 500px;
          }

          .popup {
            position: fixed;
            z-index: 1;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            padding: 40px 30px;
            max-width: 300px;
            border-radius: 10px;
            
            
          }
        `}
      </style>
    </div>
  );
};

export default InquiryList;






