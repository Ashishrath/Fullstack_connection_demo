import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [content, setContent] = useState([
    {
      id: 1,
      title: "Title-1"
    }
  ]); 

  useEffect(() => {
    axios.get("api/content")
    .then((response) => {
      setContent(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
      <h1>Testing!</h1>
      <p>Content Count: {content.length}</p>
      {
        content.map((tempContent) => {
          return (<div key={tempContent.id}>
            <h4>{tempContent.title}</h4>
          </div>)
        })
      }
      
    </>
  )
}

export default App
