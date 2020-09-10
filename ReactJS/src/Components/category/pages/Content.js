import React, { Component } from 'react'
import PostRandom from '../../Details/pages/PostRandom'
import {connect} from 'react-redux'
import {BrowserRouter as Link, NavLink} from "react-router-dom";
import  { GetApiPostsCategory } from '../../../Redux/actions/posts';

class Content extends Component {

    componentDidMount(){
        this.props.fetPostsCategory();   
    }
    MappingDataPostsCategory = () => this.props.data.map((value, key) =>{
        return(
                <div className="col-md-6"  key={key}>
                    <div className="post post-thumb">
                        <NavLink className="post-img" to={"/posts/" + value.id} key={key}>
                            <img width="250px" height="250px" src={"http://localhost:8080/news/public/backend/images/post/"+ value.image} alt ="..." />
                        </NavLink>
                        <div className="post-body">
                            <div className="post-meta">
                                <NavLink className={"post-category "  + value.font} to={"/posts/" +value.id} key={key}>
                                    {value.cate_name}
                                </NavLink>
                                <span className="post-date"> { value.created_at} </span>
                                <span className="post-date" > <i className="fa fa-eye">{value.view }</i> </span>
                            </div>
                        
                            <h3 className="post-title">
                                <NavLink to={"/posts/" +value.id} key={key}>
                                    {value.name}
                                </NavLink>
                            </h3>
                        </div>
                    </div>
                </div>
        )          
    })



    render() {
        return (
          <div>
              <div className="section">
               <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                        
                        {this.MappingDataPostsCategory()}

                        </div>
                     </div>
                         <div className="col-md-4">
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
        )
    }
}
const mapStateToProps = (state) => {
    return {
         data : state.posts.post_category
    }
  }
  const mapDispatchToProps = (dispatch,props) => {
      const id = props.id;
    return {
        fetPostsCategory : (posts) => {
            dispatch(GetApiPostsCategory(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Content);