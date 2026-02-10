import React, {useState, useEffect, useMemo} from 'react'
import axios from 'axios'

const UserList = () => {

    const [user, setUser]=useState([])
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState(null)
    const [keyword, setKeyword] = useState("");

  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res)=> {
        console.log(res.data)
        setUser(res.data)
        setLoading(false)
      })
      .catch((err)=>{
        console.error('데이터를 가져오지 못했습니다.', err)
        setError('데이터를 가져오지 못했습니다.')
        setLoading(false)

      })
  },[])

  const filtered = useMemo(() => {
        console.log("정렬 및 필터링 중....");
        
        return user
            .filter((user) => 
                user.name.toLowerCase().includes(keyword.toLowerCase())
            ).sort((a, b) => a.name.localeCompare(b.name))
            
    }, [keyword, user]);

  if(loading) return <p>로딩중</p>
  if(error) return <p>{error}</p>


  return (
    <div>
      <h2>사용자 목록</h2>
      <input 
                value={keyword}
                type="text"
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='이름을 입력하세요'
            />
      <ul>
        {filtered.map((u)=> (
            <li key={u.id}>
              <div>
                name:{u.name}
              </div>
              <div>
                email:{u.email}
              </div>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
