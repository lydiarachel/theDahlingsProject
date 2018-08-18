import React, { Component } from 'react';
import Comment from '../Comment';
import API from "../../utils/API";
import './CommentBox.css'

class CommentBox extends Component{
    state = {
        commentInput:""
    }
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
        
        // Updating the input's state
        this.setState({
          [name]: value
        })
      };

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
              author: "a929728a5394e821e79dc220"
            })
        
        }
        
        this.setState({
          commentInput: ""
        });
      };
    
    render(){
        return (
            <div className="row">
            <div className="col s11 m11">
                <h2 className="gist-comment">Comments </h2>
                <div>
                {this.props.comments.map(comment => (
                    <Comment
                        key={comment.id}
                        commentProp={comment}
                    />
                ))}
                </div>
                <form className="form">
                <input
                    value={this.state.commentInput}
                    name="commentInput"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Enter Comment"
                />
                <button 
                    className="btn waves-effect waves-light right"
                    type="submit"
                    name="action"
                    onClick={this.handleFormSubmit}
                    >
                    Comment
                    <i className="material-icons right">send</i>
                    </button>
                </form>
                

            </div>
            </div>
        )
    }
}

export default CommentBox; 

