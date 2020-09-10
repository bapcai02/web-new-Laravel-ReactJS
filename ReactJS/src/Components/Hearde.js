import React, {  Component  } from 'react'
import {BrowserRouter as Link, NavLink} from "react-router-dom";
import { GetApiCategory } from '../Redux/actions/category';
import {connect} from 'react-redux'

class Hearde extends Component  {

    componentDidMount(){
        this.props.fetAllCategory()
    }



    MappingDataCategory = () => this.props.datacategory.map((value, key) =>{
        return(
            <li className={value.front} key = {key}>
                <NavLink to={"/post/category/"+value.id} key={key}>
                    {value.name}
                </NavLink>
            </li>
        )          
    })
    render() {
        // console.log(this.props.datacategory)
        return (
            <div>
                <header id="header">
                    {/* Nav */}
                    <div id="nav">
                    {/* Main Nav */}
                    <div id="nav-fixed">
                        <div className="container">
                        {/* logo */}
                        <div className="nav-logo">
                            <NavLink to="/" className="logo" ><img src="./img/logo.png" alt="" /></NavLink>
                        </div>
                        {/* /logo */}
                        {/* nav */}
                        <ul className="nav-menu nav navbar-nav">
                             {this.MappingDataCategory()}
                        </ul>
                        {/* /nav */}
                        {/* search & aside toggle */}
                        <div className="nav-btns">
                            <button className="aside-btn"><i className="fa fa-bars" /></button>
                            <button className="search-btn"><i className="fa fa-search" /></button>
                            <div className="search-form">
                            <input className="search-input" type="text" name="search" placeholder="Enter Your Search ..." />
                            <button className="search-close"><i className="fa fa-times" /></button>
                            </div>
                        </div>
                        {/* /search & aside toggle */}
                        </div>
                    </div>
                    {/* /Main Nav */}
                    {/* Aside Nav */}
                    <div id="nav-aside">
                        {/* nav */}
                        <div className="section-row">
                        <div className="aside-widget">
							<div className="tags-widget">
								<ul>
									<li><NavLink to="/">Chrome</NavLink></li>
								</ul>
							</div>
						</div>
                        </div>
                        <div className="section-row">
                        <h3>Follow us</h3>
                        <ul className="nav-aside-social">
                            <li><NavLink to= "https://www.facebook.com/profile.php?id=100014297380573" ><i className="fa fa-facebook" /></NavLink></li>
                            <li><NavLink to= "https://www.facebook.com/profile.php?id=100014297380573"><i className="fa fa-twitter" /></NavLink></li>
                            <li><NavLink to= "https://www.facebook.com/profile.php?id=100014297380573" ><i className="fa fa-google-plus" /></NavLink></li>
                            <li><NavLink to= "https://www.facebook.com/profile.php?id=100014297380573"><i className="fa fa-pinterest" /></NavLink></li>
                        </ul>
                        </div>
                        {/* /social links */}
                        {/* aside nav close */}
                        <button className="nav-aside-close"><i className="fa fa-times" /></button>
                        {/* /aside nav close */}
                    </div>
                    {/* Aside Nav */}
                    </div>
                    {/* /Nav */}
                </header>
                {/* /Header */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        datacategory : state.category.list_category
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        fetAllCategory : (category) => {
            dispatch(GetApiCategory());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Hearde);