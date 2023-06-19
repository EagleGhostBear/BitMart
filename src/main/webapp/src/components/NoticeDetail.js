import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const NoticeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState({});
  const [error, setError] = useState(null);

  const handleGoBack = () => {
    navigate('/notices');
  };

  useEffect(() => {
    const fetchNoticeDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/notices/${id}`);
        setNotice(response.data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch notice detail');
      }
    };

    fetchNoticeDetail();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <hr style={{ borderTop: '2px solid #000', marginBottom: '10px' }} />
      <h1 style={{ fontSize: '15px' }}>{notice.title}</h1>
      <p>작성자: {notice.author}</p>
      <p>작성일: {notice.date}</p>
      <hr style={{ borderTop: '1px solid rgba(0, 0, 0, 0.2)', marginBottom: '10px' }} />
      <p>{notice.content}</p>
      <hr style={{ borderTop: '1px solid rgba(0, 0, 0, 0.5)', marginBottom: '10px' }} />
      <button
        style={{
          padding: '0px 10px',
          width: '150px',
          height: '42px',
          backgroundColor: 'rgb(95, 0, 128)',
          marginLeft: '700px',
          overflow: 'hidden',
          textAlign: 'center',
          display: 'block',
          borderRadius: '0px',
          color: 'white',
          border: '0px',
          fontSize: '14px',
        }}
        onClick={handleGoBack}
      >
        목록
      </button>
    </div>
  );
};

export default NoticeDetail;

