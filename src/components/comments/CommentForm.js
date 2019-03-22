import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

class CommentForm extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            ticket: this.props.ticket
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
            homeId: this.props.state.home.id
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <TextField
                            label="Comment"
                            name="comment"
                            value={
                                this.state.comment || ''
                            }
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <Button type="submit">Save</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state,
        location: state.location,
        authenticated: state.currentUser !== null,
        homes: state.homes,
        home: state.home,
        locations: state.locations
    }
}

export default connect(mapStateToProps)(CommentForm)