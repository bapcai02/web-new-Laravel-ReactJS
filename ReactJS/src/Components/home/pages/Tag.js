import React, { Component } from 'react'
import {connect} from 'react-redux';
import  { GetApiHastag,GetApiCategory } from '../../../Redux/actions/category';
import {BrowserRouter as Link, NavLink} from "react-router-dom";

 class Tag extends Component {

    componentDidMount(){
        this.props.fetHastag();  
        this.props.fetCategory();
    }

    MappingCategory= () => this.props.datacategory.map((value, key) =>{

        return(
            <ul key = {key}>
                <NavLink className={value.front} to={"/posts/category/"+value.id} >
                            {value.name}
                </NavLink>
            </ul>

        )
    })
    render() {
        console.log(this.props.datacategory)
        return (
            <div>
                 <div className="col-md-4">

                    {/* catagories */}
                    <div className="aside-widget">
                        <div className="section-title">
                        <h2>Catagories</h2>
                        </div>
                        <div className="category-widget">
                            {this.MappingCategory()}
                        </div>
                    </div>
                    {/* /catagories */}
                    {/* tags */}
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
                    {/* /tags */}
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
         data : state.category.hastag,
         datacategory : state.category.list_category
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        fetHastag : (posts) => {
            dispatch(GetApiHastag());
        },
        fetCategory : (posts) => {
            dispatch(GetApiCategory());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Tag)