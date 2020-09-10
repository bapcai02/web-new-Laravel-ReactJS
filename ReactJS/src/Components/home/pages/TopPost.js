import React, { Component } from 'react'
import {connect} from 'react-redux';
import  { GetApiPostsTop } from '../../../Redux/actions/posts';
import {BrowserRouter as Link, NavLink} from "react-router-dom";


class TopPost extends Component {

    componentDidMount(){
        this.props.fetPostsTop();
        
    }

    MappingDataTopPosts= () => this.props.data.map((value, key) =>{
        return(
           <div className="col-md-4" key ={key}>
                <div className="post">
                        <NavLink className="post-img" to={"/posts/" +value.id} >
                            <img height="250px" src={"http://localhost:8080/news/public/backend/images/post/"+ value.image} alt ="..." />
                        </NavLink>
                    <div className="post-body">
                        <div className="post-meta">
                            <NavLink className={"post-category "  + value.font} to={"/posts/" +value.id} >
                                    {value.cate_name}
                            </NavLink>
                            
                            <span className="post-date">{value.created_at}</span>
                            <span className="post-date"> <i className="fa fa-eye">{value.view }</i> </span>
                        </div>
                        <h3 className="post-title">
                            <NavLink to={"/posts/" +value.id} >
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
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title">
                        <h2>Được xem nhiều nhất</h2>
                    </div>
                </div>
                {this.MappingDataTopPosts()}    
            </div>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
         data : state.posts.post_top 
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        fetPostsTop : (posts) => {
            dispatch(GetApiPostsTop());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (TopPost);