import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import HomesForm from './HomesForm'
import {createHome} from '../../actions/homes'

class HomesFormContainer extends PureComponent {
    addHome = home => {
      this.props.createHome(home)
    }
  
    render() {
      const { authenticated } = this.props
      if (!authenticated) return <Redirect to="/locations" />
  
      return (
        <div>
            <h2>Add Home:</h2>
            <HomesForm onSubmit={this.addHome} id={this.props.params} />
        </div>
      )
    }
  }
  
  const mapStateToProps = state => {
    return {
      home: state.home,
      homes: state.homes,
      authenticated: state.currentUser !== null,
    }
  }
  
  export default connect(mapStateToProps, { createHome })(HomesFormContainer)
  
  