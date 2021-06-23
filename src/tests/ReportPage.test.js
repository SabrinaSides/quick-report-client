import React from 'react';
import ReactDOM from 'react-dom';
import ReportPage from '../components/ReportPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReportPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
