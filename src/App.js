import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import './App.css'
import TopBar from './components/layout/TopBar'
// import LocationsListContainer from './components/locations/LocationsListContainer'
// import HomesListContainer from './components/homes/HomesListContainer'
// import HomesFormContainer from './components/homes/HomesFormContainer'
// import HomeDetails from './components/homes/HomeDetails'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <TopBar />
          </nav>
          <main style={{ marginTop: 75 }}>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            {/* <Route exact path="/locations" component={LocationsListContainer} />
            <Route exact path="/locations/:id" component={HomesListContainer} />
            <Route exact path="/homes/" component={HomesFormContainer} />
            <Route exact path="/homedetails/:id" component={HomeDetails} /> */}
            <Route exact path="/" render={() => <Redirect to="/" />} />
          </main>
        </div>
      </Router>
    )
  }
}

export default App
