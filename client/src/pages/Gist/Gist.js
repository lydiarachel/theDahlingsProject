import React from "react";
import ActionButtons from "../../components/ActionButtons";
import Card from '../../components/Card';
import CommentBox from '../../components/CommentBox';
import API from "../../utils/API";
import "./Gist.css";

class Gist extends React.Component {
  state = {
      gistResult: []
  }

  componentDidMount(){
    console.log(this.props.match.params)
    API.findGists({_id:this.props.match.params.id})
    .then(result => {
      console.log(result.data);
      this.setState({
        gistResult: result.data
      })
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
      author={this.state.gistResult[0].author}
      category={this.state.gistResult[0].category}/>
    </div>
    
    <div className="row">
      <CommentBox 
      _id={this.state.gistResult[0]._id}
      comments={this.state.gistResult[0].comments}
      />
    </div>
  </div>
    )
  }
};

export default Gist;