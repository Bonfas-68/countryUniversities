import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [searchVal, setSearchVal] = useState('')
  // const [load, setLoad] = useState(true);
  const [unis, setUnis] = useState({})
  // console.log(unis);

  const handleFetchData = (e) =>{
    e.preventDefault()
    
  }
  useEffect(()=>{
    const fetchData =  () =>{
      try {
        fetch(`http://universities.hipolabs.com/search?country=${searchVal}`).
        then((res) =>  res.json()).
        then((data) =>{
          // console.log(data);
          setUnis(data)
          // console.log(unis)
        })
      } catch (error) {
        console.log(error)
      }
      
    }
    fetchData()
    
  }, [searchVal])

  // console.log(searchVal)
  return (
    <main>
      <div className="head">
        <h1>Search Country By Name</h1>
      </div>
      <br />
      <br />
      <form action="" onSubmit={handleFetchData}>
        <input type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)}/>
        <input type="submit" value="Submit" />
      </form>

      <div className="country-card">
      {
        unis.map((dat, index) =>{
          return(
            {unis.length}
            
            <div key={index} className="uni-container">
              <span className='symbol'>{dat.alpha_two_code}</span>
              <div className="uni">
                <h2>{dat.name}</h2>
                <a href={dat.web_pages[0]}>{dat.web_pages[0]}</a>
                <a href={dat.domains[0]}>{dat.domains[0]}</a>
              </div>
            </div>
          )
        })
      }

      </div>
      
      <div>{searchVal}</div>
    </main>
  )
}

export default App
