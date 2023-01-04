import './App.css';
import {Header} from '../header/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import {ArticleList} from '../arcticleLIst/ArticleList.js'
function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <div className='article-list'>
          <ArticleList/>
        </div>

      </div>
    </Router>

  );
}

export default App;
