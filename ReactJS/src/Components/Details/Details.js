import React, { Component } from 'react'
import {BrowserRouter as Link,NavLink,useParams} from "react-router-dom";
import Content from './pages/Content'

export default function Details () {

        let { id } = useParams();

        return (
            <div>
                <Content id = {id}/>
            </div>
        )
    }