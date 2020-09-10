import React, { Component } from 'react'
import {connect} from 'react-redux';
import  { GetApiPostsTech } from '../../../Redux/actions/posts';
import {BrowserRouter as Link, NavLink} from "react-router-dom";


class PostTech extends Component {

  componentDidMount(){
    this.props.fetPostTech();
    
}

MappingDataPostDev= () => this.props.data.map((value, key) =>{

    return(

        <div className="post" key = {key}>
             <NavLink  NavLink className="post-img" to={"/posts/"+value.id} >
                <img  src={"http://localhost:8080/news/public/backend/images/post/"+ value.image} alt ="..." />
            </NavLink>
            <div className="post-body">
                <div className="post-meta">
                    <NavLink className={"post-category "  + value.font} to={"/posts/"+value.id} >
                            {value.cate_name}
                    </NavLink>
                    
                    <span className="post-date">{value.created_at}</span>
                    <span className="post-date"> <i className="fa fa-eye">{value.view }</i> </span>
                </div>
                <h3 className="post-title">
                    <NavLink to={"/posts/"+value.id} >
                          {value.name}
                    </NavLink>
                </h3>     
                <b className="post-title">{ value.title}...</b>              
            </div>
          </div>
      )          
  })

    render() {
        return (
         <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2>Công Nghệ</h2>
                </div>
              </div>
              {/* post */}
              <div className="col-md-12">
                <div className="post post-row">
                  {this.MappingDataPostDev()}
                </div>
              </div>
            </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
  return {
       data : state.posts.post_tech 
  }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
    fetPostTech : (posts) => {
          dispatch(GetApiPostsTech());
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (PostTech);