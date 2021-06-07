import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import ReportList from './ReportList/ReportList';
import AddReport from './AddReport/AddReport';
import ReportPage from './ReportPage/ReportPage';
import EditReport from './EditReport/EditReport';
import Navbar from './Navbar/Navbar';
import reportStore from './dummy-store'
import './App.css';

class App extends Component {
  state = {
    reports: []
  }

  componentDidMount() {
    //api call in future
    setTimeout(() => this.setState(reportStore), 100)
  }

  render() {
    //add contextvalue to sync with state and state changes
    return (
      <div className='App'>
        <Navbar />
        <h1 className='header'><Link to='/report-list'>QuickReport</Link></h1>
        <main>
          <Route exact path='/' component={LandingPage} />
          <Route path='/report-list' component={ReportList} />
          <Route path='/add-report' component={AddReport} />
          <Route path='/edit-report/:id' component={EditReport} />
          <Route path='/report/:id' component={ReportPage} />
        </main>
      </div>
    );
  }
}

export default App;
