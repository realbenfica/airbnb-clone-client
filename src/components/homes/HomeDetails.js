import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CommentForm from "../comments/CommentForm"
import { addComment, fetchAllComments } from '../../actions/comments'
import './HomeDetails.css'
import CommentsDisplay from '../comments/CommentsDisplay'

class HomeDetails extends PureComponent {
    componentWillMount() {
        this.props.fetchAllComments()
        // this.props.getUserStats()
    }

    addComment = comment => {
        this.props.addComment(comment)
    }

    render() {
        return (
            <div className="homedetails">
                <h1>Home details:</h1>

                <p>Price: €{this.props.home && this.props.home.price},00</p>
                <p>Description: {this.props.home && this.props.home.description}</p>
                <p>Picture:
                <img key={this.props.home && this.props.home.picture} className="img-responsive" src={this.props.home && this.props.home.picture} alt="logo" />
                </p>
                <CommentsDisplay data={this.props} />
                <CommentForm onSubmit={this.addComment} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        home: state.home,
        users: state.users,
        homes: state.homes,
        comments: state.comments
    }
}

export default connect(mapStateToProps, { addComment, fetchAllComments
    // , getUserStats 
})(HomeDetails)