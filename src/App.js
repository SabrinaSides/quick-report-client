import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import ReportContext from './ReportContext';
import LandingPage from './LandingPage/LandingPage';
import ReportList from './ReportList/ReportList';
import AddReport from './AddReport/AddReport';
import ReportPage from './ReportPage/ReportPage';
import EditReport from './EditReport/EditReport';
import NavbarLanding from './Navbar/NavbarLanding';
import NavbarMain from './Navbar/NavbarMain';
import './App.css';
//import reports from './dummy-store';
import SignInPage from './SignInPage/SignInPage';
import config from './config'

class App extends Component {
  state = {
    reports: [],
    error: null
  };

  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  componentDidMount(){
    this.handleFetchData()
  }

  handleFetchData = () => {
    fetch(`${config.API_ENDPOINT}/reports`)
      .then(res => {
        if(!res.ok){
          throw new Error(res.statusText)
        }
      return res.json()
      })
      .then(reports => {this.setState({reports})})
      .catch((error) => this.setState(error))
  }

  render() {
    const contextValue = {
      reports: this.state.reports,
      fetchData: this.handleFetchData,
    };

    return (
      <ReportContext.Provider value={contextValue}>
        <div className="App">
          <Route exact path="/" component={NavbarLanding} />
          {['/reports', '/add-report', '/edit-report', 'reports/:id'].map(
            (path) => (
              <Route path={path} component={NavbarMain} />
            )
          )}

          <h1 className="header">
            <Link to="/reports" className="text-link">
              QuickReport
            </Link>
          </h1>
          <main>
            <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/reports/:pt_id" component={ReportPage} />
            <Route path="/reports" component={ReportList} />
            <Route path="/add-report" component={AddReport} />
            <Route path="/edit-report/:pt_id" component={EditReport} />
            <Route path="/sign-in" component={SignInPage} />
            </Switch>
          </main>
        </div>
      </ReportContext.Provider>
    );
  }
}

export default App;
