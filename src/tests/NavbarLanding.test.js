import React from 'react'
import ReactDOM from 'react-dom'
import NavbarLanding from '../components/NavbarLanding'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <NavbarLanding/>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})