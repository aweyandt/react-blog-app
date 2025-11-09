import { Route, Routes } from 'react-router';
import './App.css'
import { ThemeProvider } from './components/postLists';
import ContactPage from './components/contact/ContactPage';
import CommonLayout from './layouts/CommonLayout';
import PostList from './components/postLists/PostList';
import Homepage from './components/homepage/Homepage';
import IndividualBlogPost from './components/blog/IndividualBlogPost';
import './App.css';

function App() {
  return ( 
    <ThemeProvider>
      <div className="container"> 
        <Routes>
          <Route element={<CommonLayout />}>
            <Route>
              <Route path="/" element={<Homepage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/posts" element={<PostList />} />
              <Route path="/posts/:post_id" element={<IndividualBlogPost />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  ); 
}

export default App;