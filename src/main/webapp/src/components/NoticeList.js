import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/NoticeList.css'; 

const NoticeList = ({ title }) => {
  const [notices, setNotices] = useState([]);

  const fetchNotices = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/notices');
      const data = response.data;
      setNotices(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <div className="notice-list-container">
      <h1 className="notice-list-title">{title}</h1>
      {notices.length === 0 ? (
        <p>공지사항이 없습니다.</p>
      ) : (
        <div>
          <hr className="notice-list-divider" />
          <div className="notice-list-header">
            <div className="notice-list-header-item">번호</div>
            <div className="notice-list-header-item">제목</div>
            <div className="notice-list-header-item">작성자</div>
            <div className="notice-list-header-item">작성일</div>
          </div>
          <hr className="notice-list-divider" />
          {notices.map((notice, index) => (
            <div key={notice.id} className="notice-list-item">
              <div className="notice-list-item-number">{(index + 1).toString().replace(".", "")}</div>
              <div className="notice-list-item-title">
                <Link to={`/notices/${notice.id}`}>{notice.title}</Link>
              </div>
              <div className="notice-list-item-author">{notice.author}</div>
              <div className="notice-list-item-date">{notice.date}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoticeList;





