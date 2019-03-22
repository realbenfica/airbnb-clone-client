import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchAllComments, fetchComment } from '../../actions/comments'

class CommentsDisplay extends PureComponent {
    componentWillMount() {
        this.props.fetchAllComments()
    }

    getComment(commentId) {
        this.props.fetchComment(commentId)
    }

    render() {
        return (
            <div>
                <h3>Comments:</h3>
                <ul>
                    <li>
                        {this.props.comments && this.props.comments
                            .filter((comment) => (this.props.data.match.params.id == comment.homeId) ? comment : null)
                            .map(comment => (
                                <ul key={comment.id}>
                                    <li><strong>Users Email</strong></li>
                                    {/* <li>{comment.users.email}</li> */}
                                    <br></br>
                                    <li><strong>Comment:</strong></li>
                                    <li>{comment.comment}</li>
                                </ul>
                            ))
                        }
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        comments: state.comments,
        comment: state.comment,
        users: state.users === null ? null : state.users
    }
}

export default connect(mapStateToProps, { fetchAllComments, fetchComment })(CommentsDisplay)