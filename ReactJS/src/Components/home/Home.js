import React, { Component } from 'react'
import NewPost from './pages/NewPost'
import PostRecent from './pages/PostRecent'
import PostTalk from './pages/PostTalkCoder'
import PostTop from './pages/TopPost'
import PostDeveloper from './pages/PostDeveloper'
import PostTech from './pages/PostTech'
import Tag from './pages/Tag'

export default class  Home extends Component  {
    render(){
    return (
        <div>
            <NewPost/>
            <div className="section">
                <div className="container">
                    
                    <PostRecent/>
               </div> 
            </div>
            <div className="section section-grey">
                <div className="container">
                    <PostTop/>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <PostTalk/>
                        <PostDeveloper/>
                    </div>
                    <div className="row">
                        <PostTech/>
                        <Tag/>
                    </div>
                </div>
            </div>
        </div>
    )    
}
}