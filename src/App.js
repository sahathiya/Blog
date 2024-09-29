import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {  Route, Routes } from 'react-router-dom';
import BlogNavbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import CreateBlog from './components/CreateBlog';
import { BlogProvider } from './context/BlogContext';

function App() {
  return (
    <BlogProvider>
      <BlogNavbar />
     <Routes>
    

          <Route path="/" element={<CreateBlog />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
    
    </BlogProvider>
  );
}

export default App;
