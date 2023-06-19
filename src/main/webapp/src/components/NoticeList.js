import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div>
      <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{title}</h1>
      {notices.length === 0 ? (
        <p>공지사항이 없습니다.</p>
      ) : (
        <div>
          <hr style={{ borderTop: '2px solid #000', marginBottom: '10px' }} />
          <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
            <div style={{ flex: '1', textAlign: 'center' }}>번호</div>
            <div style={{ flex: '5', textAlign: 'center' }}>제목</div>
            <div style={{ flex: '2', textAlign: 'center' }}>작성자</div>
            <div style={{ flex: '2', textAlign: 'center' }}>작성일</div>
          </div>
          <hr style={{ borderTop: '1px solid #000', marginBottom: '10px' }} />
          {notices.map((notice, index) => (
            <div key={notice.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
              <div style={{ flex: '1', textAlign: 'center' }}>{(index + 1).toString().replace(".", "")}</div>
              <div style={{ flex: '5', textAlign: 'center' }}>
                <Link to={`/notices/${notice.id}`}>{notice.title}</Link>
              </div>
              <div style={{ flex: '2', textAlign: 'center' }}>{notice.author}</div>
              <div style={{ flex: '2', textAlign: 'center' }}>{notice.date}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoticeList;

