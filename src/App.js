import './App.css';
// import { Button, ButtonGroup } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/chats" element={<ChatPage />}></Route>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
