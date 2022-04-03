import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'src/css/app.css';
import Home from 'src/components/pages/Home';
import Detail from 'src/components/pages/Detail';
import Layout from 'src/components/Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/detail" element={<Detail />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
