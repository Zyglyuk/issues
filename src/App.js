import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarHeader from './view/NavBarHeader';
import Main from './view/Main';
import Trello from './view/Trello';
import GitHubIssueList from './view/GitHubIssueList';
import NotFound from './view/NotFound';
import CourseView from './view/CourseView';

function App() {
  return (
    <div>
      <NavBarHeader />
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/issues' element={<GitHubIssueList />} />
          <Route path='/trello' element={<Trello />} />
          <Route path='/course' element={<CourseView />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
