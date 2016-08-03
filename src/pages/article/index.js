import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetail } from 'actions/index';
import './index.scss';

function createMarkup(contents) {
  return { __html: contents }
}

class Article extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let params = this.props.params;
    this.props.fetchDetail(params.pathname);
  }

  render() {
    let { posts } = this.props;
    let tags = posts.tag || [];

    return (
      <div className="content">
        <div className="article">
          <div>
            <h1 className="article--title">{posts.title}</h1>
            <div className="article--info">
              <img className="article--avatar" src="https://avatars0.githubusercontent.com/u/10356168?v=3&s=460" />
              <a className="article--author" href="https://github.com/xiaoyann" target="_blank">xiaoyann</a>
              <span className="article--time">发布于 {posts.create_time}</span>
              {tags.map((tag, i) => <span key={i} className="article--tag">{tag.name}</span>)}
            </div>
          </div>
          <div className="article--bd" dangerouslySetInnerHTML={createMarkup(posts.content)} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  let { data } = state.posts;
  return { posts: data[props.params.pathname] || {} }
}

export default connect(mapStateToProps, { fetchDetail: fetchDetail })(Article);