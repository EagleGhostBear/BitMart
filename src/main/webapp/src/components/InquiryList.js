import React, { useState } from 'react';

const InquiryList = ({ selectedInquiry }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleTitleClick = () => {
    setExpanded(true);
  };

  return (
    <div>
      <div onClick={handleTitleClick}>
        제목 작성일 답변상태
      </div>
      {expanded && selectedInquiry && (
        <div>
          <div>{selectedInquiry.selectedType} {selectedInquiry.selectedSubType}</div>
          <div>{selectedInquiry.content}</div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      )}
      {/* Remove the onClick event from the button */}
      <button onClick={handleToggle}>{expanded ? '접기' : '펼치기'}</button>
    </div>
  );
};

export default InquiryList;
