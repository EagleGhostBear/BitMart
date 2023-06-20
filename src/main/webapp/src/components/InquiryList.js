import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

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

  return (
    <div style={{ width: '800px', marginTop: '80px' }}>
      <h2 style={{ overflow: 'auto', top: '0', backgroundColor: 'white', padding: '10px 0' }}>1:1 문의</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {inquiries.map((inquiry) => (
          <li key={inquiry.id} style={{ marginBottom: '20px', transition: 'margin-bottom 0.3s ease-in-out' }}>
            <div
              onClick={() => handleToggleInquiry(inquiry)}
              style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '18px' }}
            >
              {inquiry.title} - {inquiry.created_at} - {inquiry.reply_status}
            </div>
            {selectedInquiry && selectedInquiry.id === inquiry.id && (
              <div style={{ marginTop: '10px' }}>
                <p>유형: {inquiry.type}</p>
                <p>상세 유형: {inquiry.sub_type}</p>
                <p>내용: {inquiry.content}</p>
                <div>
                  <button onClick={() => handleDeleteInquiry(inquiry.id)} style={{ marginRight: '10px' }}>
                    삭제
                  </button>
                  <button>수정</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InquiryList;

