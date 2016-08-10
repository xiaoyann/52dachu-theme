import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPosts } from 'actions/index';
import './styles.scss';

function createMarkup(contents) {
  return { __html: contents }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderRow(posts, i) {
    let tags = posts.tag || [];
    return (
      <div className="article-item" key={i}>
        <Link className="article-item--title" to={`/post/${posts.pathname}`}><h3>{posts.title}</h3></Link>
        <div className="article-item--summary" dangerouslySetInnerHTML={createMarkup(posts.summary)} />
        <div className="article--info">
          <img className="article--avatar" src="https://avatars0.githubusercontent.com/u/10356168?v=3&s=460" />
          <a className="article--author" href="https://github.com/xiaoyann" target="_blank">xiaoyann</a>
          <span className="article--time">发布于 {posts.create_time}</span>
          {tags.map((tag, i) => <span key={i} className="article--tag">{tag.name}</span>)}
        </div>
      </div>
    );
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="content">
        <div className="cate-bar">
          <a className="cate-bar--tab cate-bar--active">全部</a>
          <a className="cate-bar--tab">JavaScript</a>
          <a className="cate-bar--tab">HTML</a>
          <a className="cate-bar--tab">CSS</a>
          <a className="cate-bar--tab">Node.js</a>
          <a className="cate-bar--tab">Linux</a>
          <a className="cate-bar--tab">PHP</a>
          <a className="cate-bar--tab">其他</a>
        </div>
        <div className="article-list">
          {posts.map(this.renderRow)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  let { keys, data } = state.posts;
  return { posts: keys.map(key => data[key]) }
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(Home);


