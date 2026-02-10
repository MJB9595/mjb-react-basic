import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetail = () => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [userId, setUserId] = useState(1);
  const [searchId, setSearchId] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/users/${searchId}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.error('데이터를 가져오지 못했습니다.', err);
        setError(`${searchId}번 유저 정보를 찾을 수 없습니다.`);
        setLoading(false);
        setUser(null);
      });
  }, [searchId]);

  const handleSearch = () => {
    setSearchId(userId);
  };

  return (
    <div>
      <h2>유저 디테일 조회</h2>
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="number" 
          value={userId} 
          onChange={(e) => setUserId(e.target.value)}
          placeholder="유저 번호 (1~10)"
        />
        <button onClick={handleSearch}>조회하기</button>
        
      </div>

      <hr />

      {loading && <p>데이터 로딩 중...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && !loading && (
        <div>
          <h3>상세 정보</h3>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>City:</strong> {user.address?.city}</p>
        </div>
      )}
    </div>
  );
}

export default UserDetail;