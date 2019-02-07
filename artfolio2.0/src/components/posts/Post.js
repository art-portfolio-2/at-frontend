import React, { Component } from 'react';

import { connect } from 'react-redux';

class Post extends Component {

  render() {
    return (
      <div className="posts">
        <div className="row">
            <div className="col s12">
                <div className="card-large">
                    <div className="card-image">
                      <img alt="art photo" className="photo" src={this.props.post.imageUrl} />
                      <span className="card-title">{this.props.post.postName}</span>
                    </div>
                    <div className="post-content">
                    <span>{this.props.post.title}</span>
                    <div className="card-content">
                      <span className="username">By {this.props.user.username}</span>
                      <blockquote className="post-description">{this.props.post.description}</blockquote>
                      <div>
                        <button onClick={(e) => this.props.updating(e, this.props.post)} className="update-btn">Update Post</button>
                        <button onClick={(e) => this.props.deletePost(e, this.props.post.id)} className="delete-btn">Delete</button>
                      </div>
                    </div>
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