import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
<<<<<<< HEAD
import About from "./pages/about.jsx";
import Login from "./pages/Login";
=======
import About from "./pages/About";
import Articles from  "./pages/Articles";
import Article  from  "./pages/Article";
>>>>>>> 623472d (Enhance website SEO and content structure; add articles feature with dynamic routing)

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