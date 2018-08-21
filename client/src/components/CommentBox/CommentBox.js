import React, { Component } from 'react';
import Comment from '../Comment';
import API from "../../utils/API";
import './CommentBox.css'

class CommentBox extends Component{
    state = {
        commentInput:"",
        user: {}
    }


    componentDidMount(){
        API.getAuthenticatedUser()
            .then(user => {
                if (user) {
                    this.setState({ user: user.data })
                } else {
                    return
                }
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

      handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.commentInput) {
          alert("Please enter a comment before submitting!");
        } else {
            //to do .. add this to database rather than fakeComments Array above
            //when we do this, we will not need to pass id, that will come from the db
          API.createComment({
              comment:this.state.commentInput,
              gistId: this.props._id, 
              author: this.state.user._id
            }).then(this.props.method)
        
        }
        
        this.setState({
          commentInput: ""
        });
      };
    
    render(){
        return (
            <div className="row">
            <div className="col s11 m11">
            <form className="form">
   
                <div className = 'input-field comment-input col s12'>
                <input
                    value={this.state.commentInput}
                    name="commentInput"
                    onChange={this.handleInputChange}
                    type="text"
                />

                 <label htmlFor="comment">Enter Comment</label>
             
               
         

                <button 
                    className="btn waves-effect waves-light btn-small btn-gist-page"
                    type="submit"
                    name="action"
                    onClick={this.handleFormSubmit}
                    >
                    Comment
                    <i className="material-icons right">send</i>
                    </button>
                    </div>
                </form>

                <h2 className="gist-comment">Comments </h2>
                <div>
                {this.props.comments.map(comment => (
                    <Comment
                        key={comment._id}
                        comment={comment.comment}
                        authorName={comment.author.name}
                        date = {comment.date}
                    />
                ))}
                </div>
                
                

            </div>

      

            </div>
        )

    }
}

export default CommentBox; 

