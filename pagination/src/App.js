import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const api_link = 'https://jsonplaceholder.typicode.com/posts'

function App() {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(api_link)
      setPosts(res.data)
    }
    fetchData()
  }, [setPosts])

  const lastPostIndexOnThisPage = currentPage * postsPerPage
  const firstPostIndexOnThisPage = lastPostIndexOnThisPage - postsPerPage
  const currentPosts = posts.slice(
    firstPostIndexOnThisPage,
    lastPostIndexOnThisPage
  )

  const getPagination = () => {
    const pageNumber = []
    const paginationLength = Math.ceil(posts.length / postsPerPage)

    for (let page = 1; page <= paginationLength; page++) {
      pageNumber.push(
        <li
          onClick={() => {
            setCurrentPage(page)
          }}
          className="pageBtn"
        >
          {page}
        </li>
      )
    }
    return pageNumber
  }

  return (
    <div className="App">
      <div className="title">
        <h2>Posts</h2>
      </div>
      {/* POSTS */}
      <ul>
        {currentPosts.map(post => {
          return <li>{post.title}</li>
        })}
      </ul>
      {/* Pagination */}
      <ul className="pagination">{getPagination()}</ul>
    </div>
  )
}

export default App
