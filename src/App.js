import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ReportContext from './ReportContext';
import LandingPage from './LandingPage/LandingPage';
import ReportList from './ReportList/ReportList';
import AddReport from './AddReport/AddReport';
import ReportPage from './ReportPage/ReportPage';
import EditReport from './EditReport/EditReport';
import Navbar from './Navbar/Navbar';
import './App.css';
import reports from './dummy-store';

class App extends Component {
  state = {
    reports: reports,
  };

  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleAddReport = (newReport) => {
    this.setState({
      reports: [...this.state.reports, newReport],
    });
  };

  handleEditReport = (editedReport) => {
    const indexOfReport = this.state.reports.findIndex(
      (report) => report.pt_id === editedReport.pt_id
    );
    console.log('index of report', indexOfReport);

    this.setState({
      reports: [
        ...this.state.reports.filter((_, i) => i !== indexOfReport),
        editedReport,
      ],
    });
  };

  handleDeleteReport = (report_id) => {
    this.setState({
      reports: this.state.reports.filter((report) => report.pt_id !== report_id),
    });
  };

  render() {
    const contextValue = {
      reports: this.state.reports,
      addReport: this.handleAddReport,
      deleteReport: this.handleDeleteReport,
      editReport: this.handleEditReport,
    };

    return (
      <ReportContext.Provider value={contextValue}>
        <div className="App">
          <Navbar />
          <h1 className="header">
            <Link to="/report-list" className="text-link">
              QuickReport
            </Link>
          </h1>
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route path="/report-list" component={ReportList} />
            <Route path="/add-report" component={AddReport} />
            <Route path="/edit-report/:pt_id" component={EditReport} />
            <Route path="/report/:pt_id" component={ReportPage} />
          </main>
        </div>
      </ReportContext.Provider>
    );
  }
}

export default App;
