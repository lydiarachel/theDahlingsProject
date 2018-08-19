import React from "react";
import ActionButtons from "../../components/ActionButtons";
import Card from '../../components/Card';
import CommentBox from '../../components/CommentBox';
import API from "../../utils/API";
import "./Gist.css";

class Gist extends React.Component {
  state = {
      gistResult: [],
      likes: '',
      gistId: ''
  }

  componentDidMount(){
    console.log (this.state);
    console.log(this.props.match.params)
   this.findGist()
  }
  updateLikes = () => {
    let likeUpdate = (this.state.likes + 1)
    API.updateGist({
      _id: this.state.gistId,
      liked: likeUpdate
    })
    .then(results => {
      if(results){
        this.findGist()
      }
    })
  }
  findGist = () =>{API.findGists({_id:this.props.match.params.id})
  .then(result => {
    console.log(result.data);
    this.setState({
      gistResult: result.data
    })
    this.setState({likes : this.state.gistResult[0].liked})
    this.setState({gistId : this.state.gistResult[0]._id})
  })
  .catch(err => console.log(err));
}
  render() {
    if (this.state.gistResult.length === 0){
      return null;
    }
    
    return(
  <div>
    <div className="action-buttons">
      <ActionButtons />
    </div>

    <div className="row">
      <Card 
      title={this.state.gistResult[0].title}
      body={this.state.gistResult[0].body}
      liked={this.state.gistResult[0].liked}
      date={this.state.gistResult[0].date}
      authorName={this.state.gistResult[0].author.name}
      authorId={this.state.gistResult[0].author._id}
      category={this.state.gistResult[0].category}
      updateLikes ={this.updateLikes}/>
    </div>
    
    <div className="row">
      <CommentBox 
      _id={this.state.gistResult[0]._id}
      method ={this.findGist}
      comments={this.state.gistResult[0].comments}
      />
    </div>
  </div>
    )
  }
};

export default Gist;