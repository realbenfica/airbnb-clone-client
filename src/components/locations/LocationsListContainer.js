import React, { PureComponent } from 'react'
import { getLocations } from '../../actions/locations'
import { getUsers } from '../../actions/users'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './LocationsListContainer.css'
import LocationsList from './LocationsList'

class LocationsListContainer extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.locations === null) this.props.getLocations()
      if (this.props.users === null) this.props.getUsers()
    }
  }

  render() {
    const { authenticated } = this.props
    if (!authenticated) return (
      <Redirect to="/login" />
    )

    return (
      <div>
        <h1>Locations available:</h1>
        <div className="eventslist">
          <LocationsList 
                locations={this.props.locations} 
                homes={this.props.homes} 
                />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
  locations: state.locations,
  homes: state.homes
})

export default connect(mapStateToProps, { getLocations, getUsers })(LocationsListContainer)
