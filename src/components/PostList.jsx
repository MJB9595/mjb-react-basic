import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PostList = () => {

    const [post, setPost]=useState([])
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState(null)

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res)=> {
                console.log(res.data)
                setPost(res.data.slice(0,10))
                setLoading(false)
            })
            .catch((err)=> {
                console.err('데이터를 가져오지 못했습니다.',err)
            })
    })

  return (
    <div>
      <h2>사용자 게시글 목록</h2>
      <ul>
        {post.map((u,i)=> (
            <li key={u.id}>
                {u.title}
                {u.body}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
