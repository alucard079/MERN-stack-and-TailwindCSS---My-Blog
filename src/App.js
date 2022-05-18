import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-screen-md mx-auto pt-20" >
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/articles" element={<ArticleList/>} />
            <Route path="/article" element={<Article/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
