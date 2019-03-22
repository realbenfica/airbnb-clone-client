import React from 'react'
import { connect } from 'react-redux'
import { createLocation } from '../../actions/locations'
import LocationForm from './LocationForm'

class LocationFormContainer extends React.PureComponent {
  state = {}

  onChange = (location) => {
    this.setState({
      [location.target.name]: location.target.value
    })
  }

  onSubmit = (location) => {
    location.preventDefault()
    this.setState({
      "name": "",
      "date": "",
      "description": "",
      "picture": ""
    })
    this.props.createLocation(this.state)
  }

  render() {
    return (<LocationForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, { createLocation })(LocationFormContainer)