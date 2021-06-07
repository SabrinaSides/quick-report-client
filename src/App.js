import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import ReportList from './ReportList/ReportList';
import AddReport from './AddReport/AddReport';
import ReportPage from './ReportPage/ReportPage';
import './App.css';

class App extends Component {
  render() {
    //add contextvalue to sync with state and state changes
    return (
      <div className='App'>
        {/* nav bar */}
        <h1><Link to='/report-list'>QuickReport</Link></h1>
        <main>
          <Route exact path='/' component={LandingPage} />
          <Route path='/report-list' component={ReportList} />
          <Route path='/add-report' component={AddReport} />
          <Route path='/report/:id' component={ReportPage} />
          {/* edit modal will be added to ReportPage component */}
        </main>
      </div>
    );
  }
}

export default App;
