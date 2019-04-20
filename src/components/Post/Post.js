import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DELETE_POST } from '../../actions/postActions';

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  };

  render() {
    const post = this.props.post ? (
      <div className="post center">
        <h4> {this.props.post.title} </h4>
        <p> {this.props.post.body} </p>
        <button className="btn grey" onClick={this.handleClick}>
          Delete post
        </button>
      </div>
    ) : (
      <div className="center">
        <h4> Loading post </h4>
      </div>
    );

    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.post_id);
  return {
    post: state.posts.find(post => post.id === id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(DELETE_POST(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
