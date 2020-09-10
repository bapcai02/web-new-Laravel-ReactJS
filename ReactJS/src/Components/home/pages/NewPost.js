import React, { Component } from 'react'
import {connect} from 'react-redux';
import  { GetApiPosts } from '../../../Redux/actions/posts';
import {BrowserRouter as Link, NavLink} from "react-router-dom";

class NewPost extends Component {

    componentDidMount(){
        this.props.fetNewPosts();   
    }

    MappingDataNewPosts = () => this.props.data.map((value, key) =>{
        return(
                <div className="col-md-6"  key={key}>
                    <div className="post post-thumb">
                        <NavLink to={"/posts/" + value.id}>
                            <img width="550px" height="350px" src={"http://localhost:8080/news/public/backend/images/post/"+ value.image} alt ="..." />
                        </NavLink>
                        <div className="post-body">
                            <div className="post-meta">
                                <NavLink className={"post-category "  + value.font} to={"/posts/" +value.id}>
                                    {value.cate_name}
                                </NavLink>
                                <span className="post-date"> { value.created_at} </span>
                                <span className="post-date" > <i className="fa fa-eye">{value.view }</i> </span>
                            </div>
                        
                            <h3 className="post-title">
                                <NavLink to={"/posts/" +value.id}>
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
                <div className="container">
                    {/* row */}
                    <div className="row">	

                        {this.MappingDataNewPosts()}

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
         data : state.posts.new_post 
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        fetNewPosts : (posts) => {
            dispatch(GetApiPosts());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (NewPost);