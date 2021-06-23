import React from 'react'
import ReactDOM from 'react-dom'
import ReportMain from '../components/ReportMain'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
        <ReportMain />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})