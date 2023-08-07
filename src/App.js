import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/Home/Home';
import { LoginPage } from './components/Login/Login';
import { SignUp } from './components/SignUp/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
