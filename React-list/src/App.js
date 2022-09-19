import React,{ useState , useEffect } from 'react'
import './App.css'
const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then(data => {
      setData(data.slice(0, 10))
      console.log(data);
    })
    .catch((error) => console.error(error))
  },[])
  return (
    <> 
    <div>
      <h1>React PWA App</h1>
    </div>
     <div className='card'>
      {data.map((post) => (
        <div className='main' key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

     </div>
    </>
  )
}

export default App