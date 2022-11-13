import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Index from './components/Index'
import New from './components/New'
import Show from './components/Show'
import Edit from './components/Edit'

const App = () => {
  return (
    <Router>
      <div className='user-wrap'>
        <Switch>
          <Route exact path='/'>
            <Index />
          </Route>
          <Route path='/users/new'>
            <New />
          </Route>
          <Route exact path='/users/:userID'>
            <Show />
          </Route>
          <Route exact path='/users/:userID/edit'>
            <Edit />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
