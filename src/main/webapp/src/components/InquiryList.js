import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  useEffect(() => {
    // Fetch the list of inquiries from the server (Spring Boot)
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const response = await axios.get('http://localhost:9000/inquiries');
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
      // Delete the inquiry with the specified ID from the server (Spring Boot)
      await axios.delete(`http://localhost:8080/inquiries/${inquiryId}`);

      // Fetch the updated list of inquiries
      fetchInquiries();
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h2>1:1 문의</h2>
      <ul>
        {inquiries.map((inquiry) => (
          <li key={inquiry.id}>
            <div
              onClick={() => handleToggleInquiry(inquiry)}
              style={{ cursor: 'pointer', fontWeight: 'bold' }}
            >
              {inquiry.title} - {inquiry.created_at} - {inquiry.status}
            </div>
            {selectedInquiry && selectedInquiry.id === inquiry.id && (
              <div>
                <p>유형: {inquiry.type}</p>
                <p>상세 유형: {inquiry.subType}</p>
                <p>내용: {inquiry.content}</p>
                <div>
                  <button onClick={() => handleDeleteInquiry(inquiry.id)}>삭제</button>
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
