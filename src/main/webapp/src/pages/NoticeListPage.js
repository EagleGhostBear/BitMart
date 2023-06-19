import React, { useState } from 'react';
import NoticeList from '../components/NoticeList';

const NoticeListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '-300px', marginLeft: '-20px' }}>
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
      <div style={{ width: '80%', maxWidth: '800px', marginTop: '30px', marginLeft: '40px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '30px' }}>공지사항</h1>
        <p style={{ fontSize: '14px', opacity: '0.7' }}>컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</p>
        <NoticeList currentPage={currentPage} noticesPerPage={noticesPerPage} />
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{ marginRight: '10px', cursor: 'pointer' }}
          >
            &lt;
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            style={{ marginLeft: '10px', cursor: 'pointer' }}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeListPage;

