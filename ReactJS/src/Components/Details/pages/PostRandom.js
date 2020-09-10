import React, { Component } from 'react'
import {connect} from 'react-redux';
import  { GetApiPostsRandom } from '../../../Redux/actions/posts';
import {BrowserRouter as Link, NavLink} from "react-router-dom";

class PostRandom extends Component {
    componentDidMount(){
        this.props.fetPostsRandom();
    }

    MappingDataPosts = () => this.props.data.map((value, key) =>{
        return(
                    <div className="post post-widget" key = {key}>
                        <NavLink className="post-img" to={"/posts/" +value.id} key={key}>
                            <img src={"http://localhost:8080/news/public/backend/images/post/"+ value.image} alt ="..." />
                        </NavLink>
                        <div className="post-body">
                        <NavLink to={"/posts/" +value.id} key={key}>
                                    {value.name}
                        </NavLink>
                        </div>
                    </div>
    
        )          
    })
    render() {
        return (
            <div>
                <div className="aside-widget">
                    <div className="section-title">
                    <h2>Dành Cho Bạn</h2>
                    </div>
                    {this.MappingDataPosts()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
         data : state.posts.post_random 
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        fetPostsRandom : (posts) => {
            dispatch(GetApiPostsRandom());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (PostRandom);