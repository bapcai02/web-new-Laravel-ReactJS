import React, { Component } from 'react'
import PostRandom from './PostRandom'
import {connect} from 'react-redux'
import {BrowserRouter as Link, NavLink} from "react-router-dom";
import  { GetApiPostsOne } from '../../../Redux/actions/posts';

 class Content extends Component {
    componentDidMount(){
        this.props.fetPostsRandom();   
    }
    render() {
        return (
            <div>
                <div>
                    <div id="post-header" className="page-header">
                    
                        <div className="background-img" style={{backgroundImage: `url(${"http://localhost:8080/news/public/backend/images/post/" + this.props.data.image})`}}/>
                        
                        <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                            <div className="post-meta">
                                <span className="post-date">{ this.props.data.created_at}</span>
                                <span className="post-date" > <i className="fa fa-eye">{this.props.data.view }</i> </span>
                            </div>
                            <h1>{this.props.data.name} </h1>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="section">
                        {/* container */}
                        <div className="container">
                        {/* row */}
                        <div className="row">
                            {/* Post content */}
                            <div className="col-md-8">
                            <div className="section-row sticky-container">
                                <div className="main-post">
                                    <div dangerouslySetInnerHTML={{__html: this.props.data.content}} /></div>
                                <div className="post-shares sticky-shares">
                                <a className="share-facebook"><i className="fa fa-facebook" /></a>
                                <a className="share-twitter"><i className="fa fa-twitter" /></a>
                                <a className="share-google-plus"><i className="fa fa-google-plus" /></a>
                                <a className="share-pinterest"><i className="fa fa-pinterest" /></a>
                                <a className="share-linkedin"><i className="fa fa-linkedin" /></a>
                                <a><i className="fa fa-envelope" /></a>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4">               
                            {/* post widget */}
                            <PostRandom/>

                            <div className="aside-widget">
                                <div className="section-title">
                                <h2>Catagories</h2>
                                </div>
                                <div className="category-widget">
                                <ul>
                                    <li><a href="#" className="cat-1">Web Design<span>340</span></a></li>
                                    <li><a href="#" className="cat-2">JavaScript<span>74</span></a></li>
                                    <li><a href="#" className="cat-4">JQuery<span>41</span></a></li>
                                    <li><a href="#" className="cat-3">CSS<span>35</span></a></li>
                                </ul>
                                </div>
                            </div>

                            <div className="aside-widget">
                                <div className="tags-widget">
                                    <ul>
                                        <li><a href="#">Chrome</a></li>
                                        <li><a href="#">CSS</a></li>
                                        <li><a href="#">Tutorial</a></li>
                                        <li><a href="#">Backend</a></li>
                                        <li><a href="#">JQuery</a></li>
                                        <li><a href="#">Design</a></li>
                                        <li><a href="#">Development</a></li>
                                        <li><a href="#">JavaScript</a></li>
                                        <li><a href="#">Website</a></li>
                                    </ul>
                                </div>
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

const mapStateToProps = (state) => {
    return {
         data : state.posts.post_one
    }
  }
  const mapDispatchToProps = (dispatch,props) => {
      const id = props.id;
    return {
        fetPostsRandom : (posts) => {
            dispatch(GetApiPostsOne(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Content);