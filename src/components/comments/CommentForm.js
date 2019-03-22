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

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
            ticketId: this.props.state.ticket.id
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
        event: state.event,
        authenticated: state.currentUser !== null,
        tickets: state.tickets,
        ticket: state.ticket,
        events: state.events
    }
}

export default connect(mapStateToProps)(CommentForm)