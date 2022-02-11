import React from 'react'
import Login from './components/Login'
import Signs from './components/Signs'
import Burger from './components/Burger'
import "bootstrap/dist/css/bootstrap.min.css"
import "./app.css"
const code = new URLSearchParams(window.location.search).get('code')



function App() {
  return( 
  code ? 
<>
<Burger />  
<Signs code={code}/>
</>
 : <>
<Burger />  
<Login/>
</>
  )
}
  
export default App;
