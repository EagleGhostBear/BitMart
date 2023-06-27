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
    <div style={styles.container}>
      <hr style={styles.hr} />
      <h1 style={styles.title}>{notice.title}</h1>
      <p style={styles.text}>작성자: {notice.author}</p>
      <p style={styles.text}>작성일: {notice.date}</p>
      <hr style={styles.hr} />
      <p style={styles.content}>{notice.content}</p>
      <hr style={styles.hr} />
      <button style={styles.button} onClick={handleGoBack}>
        목록
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    background: 'rgba(248, 249, 250, 0.8)',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginTop: '-980px',
    width: '1000px',
    height: '500px',
  },
  hr: {
    width: '100%',
    height: '2px',
    margin: '10px 0',
    backgroundColor: '#FFB3D1',
    border: 'none',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#663399',
    fontFamily: 'Arial, sans-serif',
  },
  text: {
    fontSize: '16px',
    marginBottom: '4px',
    color: '#993366',
    fontFamily: 'Arial, sans-serif',
  },
  content: {
    fontSize: '18px',
    lineHeight: '1.5',
    marginBottom: '10px',
    color: '#663399',
    fontFamily: 'Arial, sans-serif',
    
  },
  button: {
    padding: '8px 16px',
    backgroundColor: 'purple',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '9999px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
};

export default NoticeDetail;

