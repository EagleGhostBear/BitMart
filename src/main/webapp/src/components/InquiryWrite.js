import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/InquiryWrite.css'; // CSS 파일 import


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
      sub_type: selectedSubType,
      title,
      content,
    };

    try {
      await axios.post('http://localhost:9000/api/inquiries', newInquiry);

      setModalVisible(true);

      navigate('/inquiry');
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div style={{ width: '600px', height: '500px', marginTop: '10px' }}>
      <h2>1:1 문의</h2>
      <hr style={{ border: 'none', height: '2px', backgroundColor: '#000' }}></hr>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">유형</label>
          <select id="type" value={selectedType} onChange={handleTypeChange} style={{ width: '100%', height: '40px' }}>
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
              <select id="subType" value={selectedSubType} onChange={handleSubTypeChange} style={{ width: '100%', height: '40px' }}>
                <option value="">상세 유형 선택</option>
                <option value="주문/결제는 어떻게 하나요?">주문/결제는 어떻게 하나요?</option>
                <option value="오류로 주문/결제가 안 돼요">오류로 주문/결제가 안 돼요</option>
              </select>
            ) : selectedType === '상품문의' ? (
              <select id="subType" value={selectedSubType} onChange={handleSubTypeChange} style={{ width: '100%', height: '40px' }}>
                <option value="">상세 유형 선택</option>
                <option value="불량상품 환불 해주세요">불량상품 환불 해주세요</option>
                <option value="상품에 대한 문의가 있어요">상품에 대한 문의가 있어요</option>
              </select>
            ) : (
              <input
                type="text"
                placeholder="기타 유형을 입력해주세요"
                value={selectedSubType}
                onChange={handleSubTypeChange}
                style={{ width: '100%', height: '40px' }}
              />
            )}
          </div>
        )}
        <div>
          <label htmlFor="title">제목</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%', height: '40px' }} />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} style={{ width: '100%', height: '200px', resize: 'none', overflowY: 'auto' }} />
        </div>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray' }}></hr>
        <button
          type="submit"
          style={{
            width: '160px',
            height: '56px',
            padding: '0px 10px',
            textAlign: 'center',
            letterSpacing: '0px',
            fontSize: '16px',
            lineHeight: '20px',
            color: 'white',
            cursor: 'pointer',
            backgroundColor: 'rgb(221, 221, 221)',
            fontFamily: 'Noto Sans, sans-serif',
            fontWeight: '500',
            borderRadius: '3px',
            marginTop: '30px',
            marginLeft: '220px',
            border: 'none',
          }}
        >
          등록
        </button>
      </form>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <p>문의가 등록되었습니다.</p>
            <button onClick={() => setModalVisible(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InquiryWrite;
