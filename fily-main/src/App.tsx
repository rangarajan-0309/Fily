import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './pages/loginPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Login />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;