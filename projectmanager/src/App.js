import React from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Detail from './components/Detail';
import Main from './views/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/home" default />
          <Route element={<Detail/>} path="/api/project/:id" />
        </Routes>
      </BrowserRouter>
  </div>
  );
}
export default App;