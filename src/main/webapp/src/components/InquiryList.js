import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [inquiriesPerPage] = useState(7);
  

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

  // Pagination
  const indexOfLastInquiry = currentPage * inquiriesPerPage;
  const indexOfFirstInquiry = indexOfLastInquiry - inquiriesPerPage;
  const currentInquiries = inquiries.slice(indexOfFirstInquiry, indexOfLastInquiry);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ width: '800px', marginTop: '80px' }}>
      <h2 style={{ textAlign: 'left', marginTop: '0px' }}>1:1 문의</h2>
      <hr style={{ borderWidth: '1.5px', borderColor: 'black' }} />
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '10px',
          marginRight: '100px',
          fontWeight: '350',
          lineHeight: '20px',
          fontSize: '15px',
        }}
      >
        제목
      </h2>
      <hr style={{ borderWidth: '0.5px', borderColor: 'black', marginBottom: '10px' }} />
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {currentInquiries.map((inquiry) => (
          <li key={inquiry.id} style={{ marginBottom: '20px', transition: 'margin-bottom 0.3s ease-in-out' }}>
            <div
              onClick={() => handleToggleInquiry(inquiry)}
              style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
            >
              {inquiry.title} - {new Date(inquiry.created_at).toLocaleDateString()} - {inquiry.reply_status}
            </div>
            {selectedInquiry && selectedInquiry.id === inquiry.id && (
              <div style={{ marginTop: '10px', backgroundColor: '#F5F5F5', padding: '10px' }}>
                <p>유형: {inquiry.type}</p>
                {inquiry.subType && <p>상세 유형: {inquiry.subType}</p>}
                <p>내용: {inquiry.content}</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    style={{
                      border: 'none',
                      background: 'none',
                      color: 'rgba(0, 0, 0, 0.5)',
                      fontWeight: 'normal',
                    }}
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDeleteInquiry(inquiry.id)}
                    style={{
                      marginRight: '10px',
                      border: 'none',
                      background: 'none',
                      color: 'rgba(0, 0, 0, 0.5)',
                      fontWeight: 'normal',
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        {Array.from({ length: Math.ceil(inquiries.length / inquiriesPerPage) }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              style={{
                margin: '0 5px',
                padding: '5px 10px',
                backgroundColor: currentPage === pageNumber ? '#f5f5f5' : 'transparent',
                border: 'none',
                outline: 'none',
              }}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default InquiryList;

