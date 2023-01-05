import {Header} from '../header/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import {ArticleList} from '../arcticleLIst/ArticleList.js'
function App() {

  return (
    <Router>
      <div className="App">
        <header className="app-header">
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
