import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css'

export default function Menu(){
    return(
        <div id="nav">
            <ul id="li1">
                <NavLink to="/" className={({isActive})=>(isActive?"li22":"li2")} ><li>Home</li></NavLink>
                <NavLink to="/Pages/TaskListPage" className={({isActive})=>(isActive?"li22":"li2")}><li>Task List</li></NavLink>
                <NavLink to="/Pages/ContactPage" className={({isActive})=>(isActive?"li22":"li2")}><li>Contact</li></NavLink>
                <NavLink to="/Pages/About" className={({isActive})=>(isActive?"li22":"li2")}><li>About</li></NavLink>
                <NavLink to="/Pages/RegisterPage" className={({isActive})=>(isActive?"li22":"li2")}><li>Register</li></NavLink>
            </ul>
        </div>
    )
}