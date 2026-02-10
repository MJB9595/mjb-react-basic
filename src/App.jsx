import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UserList from './components/UserList'
import PostList from './components/PostList'
import UserDetail from './components/UserDetail'
import UserDetail2 from './components/UserDetail2'

const App = () => {

  return (
    <div>
      <h1>axios</h1>
      {/* <PostList/> */}
      {/* <UserList/> */}
      {/* <UserDetail/> */}
      <UserDetail2/>
    </div>
  )
}

export default App
