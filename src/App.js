import React from 'react'
import Login from './login'
import Sign from './sign'
import Burger from './burger'
import "bootstrap/dist/css/bootstrap.min.css"
import "./app.css"
const code = new URLSearchParams(window.location.search).get('code')



function App() {
  return( 
  code ? 
<>
<Burger />  
<Sign code={code}/>
</>
 : <>
<Burger />  
<Login/>
</>
  )
}
  
export default App;
