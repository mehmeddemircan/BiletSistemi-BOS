
import { BrowserRouter as Router , Switch,Route } from 'react-router-dom'

import './App.css';


import CandidateDetailPage from './pages/Candidate/CandidateDetailPage';
import CandidateListPage from './pages/Candidate/CandidateListPage';
import HomePage from './pages/HomePage';
import GlobalStyle from './global-styles';
import SubeListPage from './pages/Sube/SubeListPage';
import SubeDetailPage from './pages/Sube/SubeDetailPage';
import LoginPage from './pages/User/LoginPage';
import RoutePage from './pages/RoutePage';
import BosTable from './pages/Sube/BosTable';

function App() {
  return (
    <Router>

      <GlobalStyle />
<Switch>
  <Route exact path="/" component={HomePage} />
  <Route exact path="/candidates" component={CandidateListPage} />
  <Route exact path="/candidate/:id" component={CandidateDetailPage} />

  <Route exact path="/subeler" component={SubeListPage} />

  <Route exact path="/sube/:id" component={SubeDetailPage} />
  <Route exact path = "/login" component={LoginPage} />
<Route exact path="/routes" component={RoutePage} />
<Route exact path="/bos" component={BosTable} />
  
</Switch>
    </Router>
  );
}


export default App;
