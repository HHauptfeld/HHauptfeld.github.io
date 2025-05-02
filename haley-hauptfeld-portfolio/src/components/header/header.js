import React, { Component } from 'react'
import { Nav, NavLink, NavMenu } from './navElements.js'
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default class header extends Component {
    
    render() {
        const openInNewTab = url => {
            window.open(url, '_blank', 'noopener,noreferrer');
          };
        return (
            <>
                <Nav>
                    <NavMenu>
                        <NavLink to="/about" activeStyle>
                            about
                        </NavLink>
                        <NavLink to="/projects" activeStyle>
                            projects
                        </NavLink>
                        <NavLink to="/resume" activeStyle>
                            resume
                        </NavLink>
                        <NavLink to="/cooking-blog" activeStyle>
                            cooking blog
                        </NavLink>
                        <NavLink  activeStyle>
                            <MdOutlineMail />
                        </NavLink>
                        <NavLink onClick={() => openInNewTab('https://www.linkedin.com/in/haley-hauptfeld-841b16189/')} activeStyle>
                            <FaLinkedin />
                        </NavLink>
                    </NavMenu>
                </Nav>
                {/* <header class="position-fixed page-header">
                    <div class="topnav d-flex justify-content-between align-items-center">

                        <div class=" left-side ">
                            <div class="nav-link-wrapper ">
                                <a href="index.html ">HH</a>
                            </div>
                        </div>

                        <div class="right-side ">
                            <div class="nav-link-wrapper ">
                                <a href="index.html ">about</a>
                            </div>
                            <div class="nav-link-wrapper ">
                                <a href="projects.html ">projects</a>
                            </div>
                            <div class="nav-link-wrapper ">
                                <a href="resume.pdf " target="_blank ">resume</a>
                            </div>
                            <div class="nav-link-wrapper ">
                                <a href="mailto: hchauptfeld@wpi.edu " target="_blank "><i class="fa fa-envelope "></i></a>
                            </div>
                            <div class="nav-link-wrapper ">
                                <a href="https://www.linkedin.com/in/haley-hauptfeld-841b16189/ " target="_blank "><i class="fa fa-linkedin-square "></i></a>
                            </div>
                            <div class="nav-link-wrapper ">
                                <a href="https://github.com/HHauptfeld " target="_blank "><i class="fa fa-github " ></i></a>
                            </div>
                        </div>

                    </div>
                </header> */}
            </>
        )
    }
}