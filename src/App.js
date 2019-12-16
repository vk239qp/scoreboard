import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import SoloDancing from './pages/SoloDancing';
import SoloSinging from './pages/SoloSinging';
import GroupDancing from './pages/GroupDancing';
import DuetSinging from './pages/DuetSinging';
import StandUp from './pages/StandUp';
import Poetry from './pages/Poetry';
import HindiDebate from './pages/HindiDebate';
import EnglishDebate from './pages/EnglishDebut';
import Admin from './pages/Admin';
import ContestantItem from './component/ContestantItem';
import FinalItemView from './component/Final_leaderboard_item';
import FinalLeaderboard from './pages/Final';
import SuperAdmin from './pages/SuperAdmin';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/solo-dancing" component={SoloDancing} />
          <Route path="/solo-singing" component={SoloSinging} />
          <Route path="/group-dancing" component={GroupDancing} />
          <Route path="/duet-singing" component={DuetSinging} />
          <Route path="/standup" component={StandUp} />
          <Route path="/poetry" component={Poetry} />
          <Route path="/hindi-debate" component={HindiDebate} />
          <Route path="/english-debate" component={EnglishDebate} />
          <Route path="/admin" component={Admin} />
          <Route path="/contestant" component={ContestantItem} />
          <Route path="/final" component={FinalLeaderboard} />
          <Route path="/finalitem" component={FinalItemView} />
          <Route path="/super" component={SuperAdmin} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect from="/*" to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
