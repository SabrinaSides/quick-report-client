import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ReportContext from './ReportContext';
import LandingPage from './LandingPage/LandingPage';
import ReportList from './ReportList/ReportList';
import AddReport from './AddReport/AddReport';
import ReportPage from './ReportPage/ReportPage';
import EditReport from './EditReport/EditReport';
import Navbar from './Navbar/Navbar';
import reportStore from './dummy-store'
import './App.css';
import reports from './dummy-store';

class App extends Component {
  state = {
    reports: []
  }

  componentDidMount() {
    //api call in future
    setTimeout(() => this.setState(reportStore), 100)
  }

  addReport = newReport => {
    this.setState({
      ...reports,
      newReport
    })
  }

  render() {
    const contextValue = {
      reports: this.state.reports,
      addReport: this.addReport
    }

    return (
      <ReportContext.Provider value={contextValue}>
      <div className='App'>
        <Navbar />
        <h1 className='header'><Link to='/report-list'>QuickReport</Link></h1>
        <main>
          <Route exact path='/' component={LandingPage} />
          <Route path='/report-list' component={ReportList} />
          <Route path='/add-report' component={AddReport} />
          <Route path='/edit-report/:pt_id' component={EditReport} />
          <Route path='/report/:pt_id' component={ReportPage} />
        </main>
      </div>
      </ReportContext.Provider>
    );
  }
}

export default App;
