import React from 'react'
import ReactDOM from 'react-dom'
import SignInPage from '../components/SignInPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <SignInPage/>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})