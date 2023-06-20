import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InquiryWrite = () => {
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState('');
  const [selectedSubType, setSelectedSubType] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedSubType('');
  };

  const handleSubTypeChange = (e) => {
    setSelectedSubType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newInquiry = {
      type: selectedType,
      subType: selectedSubType,
      title,
      content,
    };

    try {
      // Send the new inquiry data to the server (Spring Boot)
      await axios.post('http://localhost:9000/inquiries', newInquiry);

      // Show modal after successful submission
      setModalVisible(true);

      // Redirect to the '/inquiry' route
      navigate('/inquiry');
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h2>1:1 문의</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">유형</label>
          <select id="type" value={selectedType} onChange={handleTypeChange}>
            <option value="">유형 선택</option>
            <option value="주문/결제/반품/교환문의">주문/결제/반품/교환문의</option>
            <option value="상품문의">상품문의</option>
            <option value="기타문의">기타문의</option>
          </select>
        </div>
        {selectedType && (
          <div>
            <label htmlFor="subType">상세 유형</label>
            {selectedType === '주문/결제/반품/교환문의' ? (
              <select id="subType" value={selectedSubType} onChange={handleSubTypeChange}>
                <option value="">상세 유형 선택</option>
                <option value="주문/결제는 어떻게 하나요?">주문/결제는 어떻게 하나요?</option>
                <option value="오류로 주문/결제가 안 돼요">오류로 주문/결제가 안 돼요</option>
                {/* Add other specific subtypes */}
              </select>
            ) : selectedType === '상품문의' ? (
              <select id="subType" value={selectedSubType} onChange={handleSubTypeChange}>
                <option value="">상세 유형 선택</option>
                <option value="불량상품 환불 해주세요">불량상품 환불 해주세요</option>
                <option value="상품에 대한 문의가 있어요">상품에 대한 문의가 있어요</option>
                {/* Add other specific subtypes */}
              </select>
            ) : (
              <input
                type="text"
                placeholder="기타 유형을 입력해주세요"
                value={selectedSubType}
                onChange={handleSubTypeChange}
              />
            )}
          </div>
        )}
        <div>
          <label htmlFor="title">제목</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">문의 등록</button>
      </form>
      {modalVisible && (
        <div>
          <p>문의가 등록되었습니다.</p>
          {/* Add modal content and styles */}
        </div>
      )}
    </div>
  );
};

export default InquiryWrite;

