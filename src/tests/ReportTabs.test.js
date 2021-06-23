import React from 'react'
import ReactDOM from 'react-dom'
import ReportTabs from '../components/ReportTabs'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <ReportTabs/>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})