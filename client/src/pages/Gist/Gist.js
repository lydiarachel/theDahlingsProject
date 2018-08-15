import React from "react";
import ActionButtons from "../../components/ActionButtons";
import Card from '../../components/Card';
import CommentBox from '../../components/CommentBox';
import Comment from '../../components/Comment';
import "./Gist.css";

const Gist = () => (
  <div>
    <div className="action-buttons">
      <ActionButtons />
    </div>

    <div className="row">
      <Card/>
    </div>
    
    <div className="row">
      <CommentBox/>
    </div>
  </div>
);

export default Gist;