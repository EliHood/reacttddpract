import React, {Component} from 'react';
import Comment from './Comment'

export default class CommentFeed extends Component{

    state = {
        author: '',
        text:''

    }

    handleSubmit = e => {
        e.preventDefault()
        const {author, text } = this.state
        this.props.createComment({author, text})
    }

    handleChange = e => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    renderComments(){
        return this.props.comments.map((comment, i) => (
            <Comment key={i} {...comment} />
        ))
    }

    render(){
        // we call it header here
        const {header} = this.props
        return(
            <div>
                <h2>{header}</h2>
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="author">
                        Author
                        <input id="author" type="text" onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="text">
                        Comment
                        <input id="text" type="text" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Submit Comment</button>
                </form>
                <div className="comment-list">
                
                    {this.renderComments()}
                
                </div>
            </div>
        )
    }
}