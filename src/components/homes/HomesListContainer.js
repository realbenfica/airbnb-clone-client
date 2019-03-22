import React, { PureComponent } from 'react'
// import { getHomes, getHome } from '../../actions/homes'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './HomesListContainer.css'
import { Link } from 'react-router-dom'
// import HomesFormContainer from './HomesFormContainer'


class HomesListContainer extends PureComponent {
  componentDidMount() {
    this.props.getHomes()
  }

  getHome(homeId) {
    this.props.getHome(homeId)
  }

  render() {
    if (!this.props.authenticated) return (
      <Redirect to="/login" />
    )

    return (
      <div>
        <h1>Homes at this location:</h1>
        <div className="homeslist">
          {this.props.homes && this.props.homes
            .filter((home) => (this.props.match.params.id == home.locationId) ? home : null)
            .map(home => (
              <ul key={home.id}>
                <li><img key={home.picture} className="img-responsive" src={home.picture} alt="logo" /></li>
                <li>{"€ " + home.price + ",00"}</li>
                <li>{home.description}</li>
                <li>
                  <Link
                    className="link"
                    to={`/homedetails/${home.id}`}
                    onClick={() => this.getHome(home.id)}
                  >
                    See details
                    </Link>
                </li>
              </ul>
            ))}
          <br />
          <br />
          <HomesFormContainer params={this.props.match.params.id}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  homes: state.homes,
  home: state.home,
  locations: state.locations,
  users: state.users
})

export default connect(mapStateToProps, { getHomes, getHome })(HomesListContainer)
