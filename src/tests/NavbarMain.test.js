import React from 'react'
import ReactDOM from 'react-dom'
import NavbarMain from '../components/NavbarMain'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <NavbarMain/>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})