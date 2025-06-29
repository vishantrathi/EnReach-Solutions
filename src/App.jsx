import Index from "./pages/Index";
import About from "./pages/about"; 
// import Login from "./pages/Login";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
         <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;