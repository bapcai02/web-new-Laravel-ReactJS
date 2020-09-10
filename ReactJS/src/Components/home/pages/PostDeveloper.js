import React, { Component } from 'react'
import {connect} from 'react-redux';
import  { GetApiPostsDev } from '../../../Redux/actions/posts';
import {BrowserRouter as Link, NavLink} from "react-router-dom";


class PostDeveloper extends Component {

  componentDidMount(){
    this.props.fetDev();
    
}


MappingDataPostDev= () => this.props.data.map((value, key) =>{

    return(
        <div className="col-md-12" key = {key}>
          <div className="post post-row">
            <div className="post" >
                <NavLink  className="post-img" to={"/posts/" +value.id} >
                    <img height="250px" src={"http://localhost:8080/news/public/backend/images/post/"+ value.image} alt ="..." />
                </NavLink>
                <div className="post-body">
                    <div className="post-meta">
                        <NavLink className={"post-category "  + value.font} to={"/posts/" + value.id} >
                                {value.cate_name}
                        </NavLink>
                        
                        <span className="post-date">{value.created_at}</span>
                        <span className="post-date"> <i className="fa fa-eye">{value.view }</i> </span>
                    </div>
                    <h3 className="post-title">
                        <NavLink to={"/posts/" +value.id} key={key}>
                              {value.name}
                        </NavLink>
                    </h3>     
                    <b className="post-title">{ value.title}...</b>              
                </div>
              </div>
            </div>
          </div>
      )          
  })

    render() {
        return (
         <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2>Tâm Sự Coder</h2>
                </div>
              </div>
              {/* post */}
              
                  {this.MappingDataPostDev()}
                
            </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
  return {
       data : state.posts.post_dev 
  }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
    fetDev : (posts) => {
          dispatch(GetApiPostsDev());
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (PostDeveloper);