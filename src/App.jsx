import { Route, Routes } from 'react-router';
import './App.css'
import { ThemeProvider } from './components/postLists';
import ContactPage from './components/contact/ContactPage';
import CommonLayout from './layouts/CommonLayout';
import PostList from './components/postLists/PostList';
import Homepage from './components/homepage/Homepage';
import IndividualBlogPost from './components/blog/IndividualBlogPost';
import './App.css';
import Login from './components/login/Login';
import { AuthProvider } from './components/authWrapper/AuthProvider';
import Logout from './components/authWrapper/Logout';

function App() {
  return ( 
    <ThemeProvider>
      <AuthProvider>
        <div className="container"> 
          <Routes>
            <Route element={<CommonLayout />}>
              <Route>
                <Route path="/" element={<Homepage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/posts" element={<PostList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/posts/:post_id" element={<IndividualBlogPost />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </ThemeProvider>
  ); 
}

export default App;
