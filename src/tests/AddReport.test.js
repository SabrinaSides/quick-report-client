import React from 'react'
import ReactDOM from 'react-dom'
import AddReport from '../components/AddReport'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <AddReport/>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})