import React, { Component } from 'react';
import ReportTabs from './ReportTabs';
import '../styles/ReportMain.css';

class ReportMain extends Component {
  static defaultProps = {
    reports: [],
  };

  render() {
    return (
      <div className='report-main'>
        <h2> Report Home </h2>
        <ReportTabs />

        <div className='folder-body main-content'>
          <h3>Choose a tab to see the full patient report</h3>
          <p>or</p>
          <button
            className='add-btn'
            onClick={() => this.props.history.push('/add-report')}
          >
            + Add New Report
          </button>
        </div>
      </div>
    );
  }
}

export default ReportMain;
