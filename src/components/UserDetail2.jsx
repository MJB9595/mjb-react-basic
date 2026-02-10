import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetail2 = () => {
  const [recipe, setRecipe] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [recipeId, setRecipeId] = useState(1);
  const [searchId, setSearchId] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://dummyjson.com/recipes/${searchId}`)
      .then((res) => {
        setRecipe(res.data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.error('데이터를 가져오지 못했습니다.', err);
        setError(`${searchId}번 레시피 정보를 찾을 수 없습니다.`);
        setLoading(false);
        setRecipe(null);
      });
  }, [searchId]);

  const handleSearch = () => {
    setSearchId(recipeId);
  };

  return (
    <div>
      <h2>레시피 조회</h2>
      <div>
        <input 
          type="number" 
          value={recipeId} 
          onChange={(e) => setRecipeId(e.target.value)}
          placeholder="레시피 번호 (1~10)"
        />
        <button onClick={handleSearch}>조회하기</button>
        
      </div>

      <hr />

      {loading && <p>데이터 로딩 중...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {recipe && !loading && (
        <div>
          <h3>상세 정보</h3>
          <p><strong>요리 이름:</strong> {recipe.name}</p>
          <p><strong>재료:</strong> {recipe.ingredients}</p>
          <p><strong>제작 방법:</strong> {recipe.instructions}</p>
          <p><strong>준비 시간:</strong> {recipe.prepTimeMinutes}</p>
          <p><strong>조리 시간:</strong> {recipe.cookTimeMinutes}</p>
          <p><strong>난이도:</strong> {recipe.difficulty}</p>
        </div>
      )}
    </div>
  );
}

export default UserDetail2;