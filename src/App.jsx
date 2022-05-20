import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/HomePage/Home';
import Login from './components/LoginPage/Login';
import Test from './components/Test/Test';

const App = () => {

  useEffect(()=>{

  },[])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
