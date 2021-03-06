import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchAllComments, fetchComment } from '../../actions/comments'
import './CommentsDisplay.css'

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
                            // eslint-disable-next-line
                            .filter((comment) => (this.props.data.match.params.id == comment.homeId) ? comment : null)
                            .map(comment => (
                                <ul key={comment.id}>
                                    <li><strong>Comment:</strong></li>
                                    <li>{comment.comment}</li>
                                    <br></br>
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