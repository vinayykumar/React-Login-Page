import logo from './logo.svg';
import './App.css';
// import FormInput from "./components/FormInput.jsx"
// import FormInput from "./components/FormInput.jsx"
import "./components/forms.css"
import Illustration from './components/Illustration';
import Login from './components/Login';
// import { useState } from 'react';
import Register from './components/Register';

// function handlescreen(){
//   if(screen==false)
// }
const screen = true;  
function App() {
  return (
    <div className="screen" >
    <Illustration/>
    {screen ? <Login/> : <Register/>}
    {/* <Register/> */}
    </div>
  );
}

export default App;
