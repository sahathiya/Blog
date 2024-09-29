import React, { createContext, useState } from 'react';

export const BlogContext = createContext();


export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [currentId, setCurrentId] = useState(1);
 

  const addBlog = (newBlog) => {
    newBlog.id = currentId;
    setCurrentId(currentId + 1);
    setBlogs([...blogs, newBlog]);
    console.log(newBlog.id);
    
   
   
  };
  

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

