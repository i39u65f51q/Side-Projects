import { useEffect, useState } from 'react'
import { API_LINK } from '../api/api'
import axios from 'axios'

export const useFetchBook = (query, pageNumber) => {
  const [books, setBooks] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setBooks([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    axios({
      method: 'GET',
      url: API_LINK,
      params: { q: query, page: pageNumber },
    })
      .then(res => {
        console.log(res.data)
        const resData = res.data.docs.map(item => item.title)
        setBooks(prev => {
          return [...new Set([...prev, ...resData])]
        })
        setLoading(false)
        setHasMore(res.data.docs.length > 0)
      })
      .catch(err => {
        setError(true)
      })
  }, [query, pageNumber])

  return { books, error, loading, hasMore }
}
