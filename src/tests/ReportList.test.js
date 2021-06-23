import React from 'react'
import ReactDOM from 'react-dom'
import ReportList from '../components/ReportList'
import ReportContext from '../ReportContext'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
        <ReportList />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})