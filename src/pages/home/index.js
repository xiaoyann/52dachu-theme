import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPosts } from 'actions/index';
import './styles.scss';

function createMarkup(contents) {
  return { __html: contents }
}

let tabs = ['全部', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Linux', 'PHP', '其他'];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
    this.renderRow = this.renderRow.bind(this);
    this.renderTab = this.renderTab.bind(this);
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

  renderTab(tab, i) {
    let cls = this.state.activeTab === i ? 'cate-bar--tab cate-bar--active' : 'cate-bar--tab';
    return <span className={cls} key={i} onClick={() => this.setState({ activeTab: i })}>{tab}</span>
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="content">
        <div className="cate-bar">
          {tabs.map(this.renderTab)}
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


