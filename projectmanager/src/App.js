import React from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Detail from './components/Detail';
import Main from './views/Main';
import Update from './components/Update';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/home" default />
          <Route element={<Detail/>} path="/api/project/:id" />
          <Route element={<Update/>} path="/api/project/edit/:id"/>
        </Routes>
      </BrowserRouter>
  </div>
  );
}
export default App;