import React, { Component } from 'react';
import { createPost, updatePost } from '../../actions';
import { connect } from 'react-redux';

class CreatePost extends Component {
    state = {
       postName: this.props.postUpdating ? this.props.postChanging.postName : '',
       imageUrl: this.props.postUpdating ? this.props.postChanging.imageUrl : '',
       description: this.props.postUpdating ? this.props.postChanging.description : ''
    }

    createPost = e => {
        e.preventDefault();
        this.props.history.push(`/user/${this.props.user.id}`);
        if (this.props.postUpdating === true) {
            this.props.updatePost(this.state, this.props.postChanging.id)
        } else {
            this.props.createPost(this.state);
        }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="dashboard-card">
                <form onSubmit={this.createPost} className="col s12">
                    <div className="row">
                        <label className="add-info">Post Name</label>
                        <div className="input-field col s12">
                        <input type="text" onChange={this.handleChanges} value={this.state.postName} name="postName" className="materialize-textarea"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label className="add-info">Image Url</label>
                            <input type="text" onChange={this.handleChanges} value={this.state.imageUrl} name="imageUrl" className="materialize-textarea"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="description">
                            <label className="add-info">Description</label>
                            <textarea onChange={this.handleChanges} value={this.state.description} name="description" className="description-textarea"></textarea>
                        </div>
                    </div>
                    { this.props.postUpdating ? <button className="update-btn">Update Post</button> 
                    : <button className="create-post-btn">Create Post</button>}
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    postChanging: state.postChanging,
    postUpdating: state.postUpdating,
})


export default connect(mapStateToProps, { createPost, updatePost })(CreatePost)