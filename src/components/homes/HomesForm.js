import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

class HomesForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      location: this.props.location,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = location => {
    const { name, value } = location.target
    this.setState({
      [name]: value,
      locationId: this.props.id
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              label="Author"
              name="authorName"
              value={
                this.state.authorName || ''
              }
              onChange={this.handleChange}
            />
          </div>
          <div>
            <TextField
              label="Description"
              name="description"
              value={
                this.state.description || ''
              }
              onChange={this.handleChange}
            />
          </div>

          <div>
            <TextField
              label="Price"
              name="price"
              value={this.state.price || ''}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <TextField
              label="Picture"
              name="picture"
              value={this.state.picture || ''}
              onChange={this.handleChange}
            />
          </div>
          <Button type="submit">Save</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    location: state.location,
    authenticated: state.currentUser !== null,
    homes: state.homes,
    home: state.home,
    locations: state.locations
  }
}

export default connect(mapStateToProps)(HomesForm)