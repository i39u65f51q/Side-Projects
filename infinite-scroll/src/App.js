import './App.css'
import { useState, useRef, useCallback } from 'react'
import { useFetchBook } from './hooks/useFetchBook'
import { useDebounce } from './hooks/useDebounce'

function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const DebounceChange = useDebounce(query, 500)

  const { books, error, loading, hasMore } = useFetchBook(
    DebounceChange,
    pageNumber
  )

  const observer = useRef()
  const lastElementRef = useCallback(
    //if loading changed, do this func
    node => {
      if (loading) return
      console.log(node)
      // clear ref.current, if current exist, for next last element
      if (observer.current) {
        observer.current.disconnect()
      }
      // declare the ref.current
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          console.log('last element')
          setPageNumber(prev => prev + 1)
        }
      })
      // if scroll to last element
      if (node) {
        observer.current.observe(node)
      }
    },
    [loading, hasMore]
  )

  return (
    <div className="justify-center flex w-screen">
      <div className="border w-1/3">
        <input
          type="text"
          className="border border-black w-full p-1 rounded"
          placeholder="Search Book"
          onChange={e => setQuery(e.target.value)}
        />
        <ul className="flex flex-col gap-2">
          {books.map((book, index) => {
            if (index + 1 === books.length) {
              return (
                <li ref={lastElementRef} key={index}>
                  {book}
                </li>
              )
            } else {
              return <li key={index}>{book}</li>
            }
          })}
        </ul>
        {loading && <div className="text-center font-bold">Loading. . .</div>}
      </div>
    </div>
  )
}

export default App
