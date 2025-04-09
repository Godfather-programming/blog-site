
import { Route, Routes } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import Layout from './components/layout/Layout';
import BlogPage from './components/blog/BlogPage';
import AuthorPage from './components/author/AuthorPage';
import Authors from './components/author/Authors';
import Blogs from './components/blog/Blogs';


function App() {
  return (
    <>
     <Layout> 
         <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/blogs/:slug" element={<BlogPage />}/>
          <Route path="/authors/:slug" element={<AuthorPage />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/authors" element={<Authors />}/>
         </Routes>
     </Layout>
    </>   
  );
}

export default App;
