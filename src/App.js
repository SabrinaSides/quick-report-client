import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReportContext from './ReportContext';
import LandingPage from './components/LandingPage';
import ReportMain from './components/ReportMain';
import AddReport from './components/AddReport';
import ReportPage from './components/ReportPage';
import EditReport from './components/EditReport';
import NavbarLanding from './components/NavbarLanding';
import NavbarMain from './components/NavbarMain';
import './App.css';
import SignInPage from './components/SignInPage';
import config from './config';

class App extends Component {
  state = {
    reports: [],
    error: null,
  };

  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  componentDidMount() {
    this.handleFetchData();
  }

  handleFetchData = () => {
    fetch(`${config.API_ENDPOINT}/reports`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((reports) => {
        this.setState({ reports });
      })
      .catch((error) => this.setState(error));
  };

  render() {
    const contextValue = {
      reports: this.state.reports,
      fetchData: this.handleFetchData,
    };

    return (
      <ReportContext.Provider value={contextValue}>
        <div className='App'>
          <Route exact path='/' component={NavbarLanding} />
          {['/reports', '/add-report', '/edit-report', 'reports/:id'].map(
            (path) => (
              <Route key={path} path={path} component={NavbarMain} />
            )
          )}

          <h1
            className='header'
            onClick={() => this.props.history.push('/reports')}
          >
            QuickReport
          </h1>
          <main>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/reports/:pt_id' component={ReportPage} />
              <Route path='/reports' component={ReportMain} />
              <Route path='/add-report' component={AddReport} />
              <Route path='/edit-report/:pt_id' component={EditReport} />
              <Route path='/sign-in' component={SignInPage} />
            </Switch>
          </main>
        </div>
      </ReportContext.Provider>
    );
  }
}

export default App;
