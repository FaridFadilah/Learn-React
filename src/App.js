import "./App.css"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import AboutTeam from "./AboutTeam";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";
import NotFound from "./NotFound";
import Login from "./Login";
import Dashboard from "./Dashboard";
// import Button from "./Button"
// import Welcome, {Welcome2} from "./Welcome"

function App(){
  return (
    <div className="">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="login" element={<Login />}/>
        <Route path="About" element={<About />}/>
        <Route path="About/team" element={<AboutTeam />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="blog/:slug" element={<BlogDetail />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}
export default App;