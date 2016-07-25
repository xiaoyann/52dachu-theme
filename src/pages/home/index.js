import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPosts } from 'actions/index';
import './styles.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
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
          <div className="article-item">
            <Link className="article-item--title" to="/article"><h3>使用 webpack 构建组件化前端项目</h3></Link>
            <p className="article-item--summary">当我们安装了mysql或者mariadb的时候，一不小心，就把密码给忘记了。这个时候，我们不管怎么尝试密码，都是错误的，都会显示如下错误: 这个问题特别的头疼。但是如果我们用如下方法就可以迎刃而解了。...</p>
            <div className="article--info">
              <img className="article--avatar" src="https://sfault-avatar.b0.upaiyun.com/406/988/4069887770-55640c43a9e91_small" />
              <a className="article--author">xiaoyann</a>
              <span className="article--time">发布于 1 分钟前</span>
              <span className="article--tag">JavaScript</span>
              <span className="article--tag">前端</span>
            </div>
          </div>
          <div className="article-item">
            <Link className="article-item--title" to="/article"><h3>使用 webpack 构建组件化前端项目</h3></Link>
            <p className="article-item--summary">当我们安装了mysql或者mariadb的时候，一不小心，就把密码给忘记了。这个时候，我们不管怎么尝试密码，都是错误的，都会显示如下错误: 这个问题特别的头疼。但是如果我们用如下方法就可以迎刃而解了。...</p>
            <div className="article--info">
              <img className="article--avatar" src="https://sfault-avatar.b0.upaiyun.com/406/988/4069887770-55640c43a9e91_small" />
              <a className="article--author">xiaoyann</a>
              <span className="article--time">发布于 1 分钟前</span>
            </div>
          </div>
          <div className="article-item">
            <Link className="article-item--title" to="/article"><h3>使用 webpack 构建组件化前端项目</h3></Link>
            <p className="article-item--summary">当我们安装了mysql或者mariadb的时候，一不小心，就把密码给忘记了。这个时候，我们不管怎么尝试密码，都是错误的，都会显示如下错误: 这个问题特别的头疼。但是如果我们用如下方法就可以迎刃而解了。...</p>
            <div className="article--info">
              <img className="article--avatar" src="https://sfault-avatar.b0.upaiyun.com/406/988/4069887770-55640c43a9e91_small" />
              <a className="article--author">xiaoyann</a>
              <span className="article--time">发布于 1 分钟前</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(Home);


