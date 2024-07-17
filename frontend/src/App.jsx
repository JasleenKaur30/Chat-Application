import React from 'react';
import Home from './pages/home/Home';
//  import Login from './pages/login/Login';
//  import SignUp from './pages/signup/SignUp';
import './App.css';

function App() {
  console.log('App component rendering');
  
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      
       {/* <SignUp />  */}
      <Home/>
      {/* <Login /> */}
    </div>
  );
}

export default App;

