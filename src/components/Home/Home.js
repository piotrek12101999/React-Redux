import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { posts } = this.props;
    const postsList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <div className="card-title">
                <Link to={`/${post.id}`}>
                  <span style={{ display: 'flex', justifyContent: 'center' }}>
                    {post.title}
                  </span>
                </Link>
              </div>
              <p style={{ display: 'flex', justifyContent: 'center' }}>
                <strong style={{ marginLeft: '5px' }}> {post.body} </strong>
              </p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center"> No posts yet </div>
    );

    return (
      <div className="container">
        <h4 className="center"> Home </h4>
        {postsList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
