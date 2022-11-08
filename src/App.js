//import logo from './logo.svg';

import Login from "./Login-Signup/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Login-Signup/Signup";
import "./App.css";
import Dashboard from "./dashboard"
import Counter from "./counter/counter"
import BlogPost from "./blogpost/blogpostList"
// import Counter from "./counter/counter";
// import PostList from "./posts/postsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/counter" element={<Counter />} />
        <Route exact path="/blogpost" element={<BlogPost />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;












