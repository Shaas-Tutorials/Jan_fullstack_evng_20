import React from 'react';

const PostDetails = (props) => {
    console.log(props)
    return(
        <div className="panel panel-danger">
            <div className="panel-heading">
                 PostDetails Page
            </div>
            <div className="panel-body">
                <h2>Details of {props.match.params.topic}</h2>
                <p>lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum</p>
            </div>
        </div>
    )
}

export default PostDetails