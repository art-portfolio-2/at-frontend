import React, { Component } from 'react';

import { connect } from 'react-redux';

class Post extends Component {

  render() {
    return (
      <div>
        <div className="row">
            <div className="col s12">
                <div className="card large" style={{height:"500px"}}>
                    <div className="card-image">
                      <img alt="art photo" src={this.props.post.imageUrl} />
                      <span className="card-title">{this.props.post.postName}</span>
                    </div>
                    <div className="card-content">
                      <span>By {this.props.user.username}</span>
                      <blockquote>{this.props.post.description}</blockquote>
                      <button onClick={(e) => this.props.updating(e, this.props.post)} className="waves-effect waves-light btn #00695c teal darken-1">Update Post</button>
                      <button onClick={(e) => this.props.deletePost(e, this.props.post.id)} className="waves-effect waves-light btn #00695c teal darken-1"> <i className="material-icons">delete</i></button>
                    </div>
                </div>
            </div>
        </div>        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
} 

export default connect(mapStateToProps, {})(Post)