import React, { useState } from 'react';
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic and API data submission here using axios or fetch

    // Show modal after registration
    setModalVisible(true);

    // Redirect to the inquiry page after registration (use setTimeout to adjust the timing)
    setTimeout(() => {
      setModalVisible(false);
      navigate('/inquiry');
    }, 2000); // Redirect to the inquiry page after 2 seconds
  };

  return (
    <div>
      <h2>1:1 문의 작성</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">유형</label>
          <select id="type" value={selectedType} onChange={handleTypeChange}>
            <option value="">유형 선택</option>
            <option value="주문/결제/반품/교환문의">주문/결제/반품/교환문의</option>
            <option value="기타문의">기타문의</option>
          </select>
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
              ) : (
                <select id="subType" value={selectedSubType} onChange={handleSubTypeChange}>
                  <option value="">상세 유형 선택</option>
                  <option value="로그인/회원 문의하고 싶어요">로그인/회원 문의하고 싶어요</option>
                  <option value="컬리에게 제안하고 싶어요">컬리에게 제안하고 싶어요</option>
                  {/* Add other specific subtypes */}
                </select>
              )}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="title">제목</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
              fontWeight: 500,
              borderRadius: '3px',
            }}
          >
            등록
          </button>
        </div>
      </form>
      {modalVisible && (
        <div>
          <p>1:1 문의가 정상적으로 접수되었습니다.</p>
        </div>
      )}
    </div>
  );
};

export default InquiryWrite;

      
