import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'


function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    //let API_URL= 'https://itunes.apple.com/search?term='

    useEffect(() => {
      if(search) {
        let axios = require('axios').default
        axios.baseURL = "https://itunes.apple.com"
        axios.get(`/search?term=${search}`)
          .then(function(response) {
            if (response.data.resultCount > 0) {
              setData(response.data.results)
            }
            else {
              setMessage("Not found!")
            }
          })
      }
    }, [search])

    const handleSearch = (e, term) => {
      e.preventDefault()
      setSearch(term)
  }
  
  return (
      <div>
          <SearchBar handleSearch = {handleSearch} />
          {message}
          <Gallery data={data}/>
      </div>
  )
  
}

export default App

