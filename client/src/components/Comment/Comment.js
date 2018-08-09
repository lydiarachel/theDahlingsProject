import React from 'react';

const Comment = (props)=> {
    return (
    <div style={{backgroundColor:props.colorProp}}>{props.commentProp.text}</div>
    )
}


export default Comment; 