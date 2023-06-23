import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NoticeListPage = () => {
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 10;

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

  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);

  const totalPages = Math.ceil(notices.length / noticesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '300px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '-400px', marginLeft: '-20px' }}>
        <div style={{ fontSize: '28px', fontWeight: '700', border: '1px solid white', padding: '10px' }}>고객센터</div>
        <ul style={{ width: '200px', listStyleType: 'none', padding: 0, border: '1px solid lightgray', marginTop: '10px', padding: '10px', backgroundColor: 'white' }}>
          <li style={{ height: '32px' }}>
            <a href="/notices" style={{ color: 'rgba(0, 0, 0, 0.7)', textDecoration: 'none' }}>
              공지사항
            </a>
          </li>
          <hr style={{ margin: '5px 0', width: '185px' }} />
          <li style={{ height: '32px' }}>
            <a href="/faq" style={{ color: 'rgba(0, 0, 0, 0.7)', textDecoration: 'none' }}>
              자주하는 질문
            </a>
          </li>
          <hr style={{ margin: '5px 0', width: '185px' }} /> {/* 수평 선 추가 */}
          <li style={{ height: '32px' }}>
            <a href="/inquiry" style={{ color: 'rgba(0, 0, 0, 0.7)', textDecoration: 'none' }}>
              1:1 문의
            </a>
          </li>
        </ul>
      </div>
      <div style={{ width: '80%', maxWidth: '800px', marginTop: '125px', marginLeft: '40px' }}>
        <h1 style={{ fontSize: '25px', fontWeight: 'bold', marginBottom: '30px' }}>공지사항</h1>
        <p style={{ fontSize: '14px', opacity: '0.7' }}>컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</p>
        <div>
          <hr style={{ borderTop: '2px solid #000', marginBottom: '10px' }} />
          <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
            <div style={{ flex: '1', textAlign: 'center' }}>번호</div>
            <div style={{ flex: '5', textAlign: 'center' }}>제목</div>
            <div style={{ flex: '2', textAlign: 'center' }}>작성자</div>
            <div style={{ flex: '2', textAlign: 'center' }}>작성일</div>
          </div>
          <hr style={{ borderTop: '1px solid #000', marginBottom: '10px' }} />
          {currentNotices.length === 0 ? (
            <p>공지사항이 없습니다.</p>
          ) : (
            currentNotices.map((notice, index) => (
              <div key={notice.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                <div style={{ flex: '1', textAlign: 'center' }}>{(indexOfFirstNotice + index + 1).toString()}</div>
                <div style={{ flex: '5', textAlign: 'center' }}>
                  <Link to={`/notices/${notice.id}`}>{notice.title}</Link>
                </div>
                <div style={{ flex: '2', textAlign: 'center' }}>{notice.author}</div>
                <div style={{ flex: '2', textAlign: 'center' }}>{notice.date}</div>
              </div>
            ))
          )}
        </div>
        {notices.length > noticesPerPage && (
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {currentPage > 1 && (
              <button onClick={() => handlePageChange(currentPage - 1)} style={{ marginRight: '10px', cursor: 'pointer' }}>
                &lt;
              </button>
            )}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                style={{ margin: '0 5px', cursor: 'pointer', fontWeight: pageNumber === currentPage ? 'bold' : 'normal' }}
              >
                {pageNumber}
              </button>
            ))}
            {currentPage < totalPages && (
              <button onClick={() => handlePageChange(currentPage + 1)} style={{ marginLeft: '10px', cursor: 'pointer' }}>
                &gt;
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeListPage;


