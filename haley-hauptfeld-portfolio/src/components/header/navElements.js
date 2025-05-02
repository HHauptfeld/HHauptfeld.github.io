

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #015249;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 10px 90px;
    padding-left: 60%;
    // padding: 0.2rem calc((100vw - 1000px) / 2);
`;

export const NavLink = styled(Link)`
    color: #57bc90;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    ${(props) =>
      props.primary &&
      `
      background: green;
      color: white;
    `};
    :hover {
      background-color: #f0e5d8;
    }
    // cursor: pointer;
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #57bc90;
    // &:hover {
    //   color: #77C9D4;
    // }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    // margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    // @media screen and (max-width: 768px) {
    //     display: none;
    // }
`;

// .background-header {
//     background: #015249 !important;
//     height: 80px!important;
//     position: fixed!important;
//     top: 0px;
//     left: 0px;
//     right: 0px;
//   }
  
//   .background-header .main-nav .nav li:last-child a {
//     color: #015249 !important;
//   }
  
  
//   .header-area {
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     right: 0px;
//     z-index: 100;
//     height: 80px;
//     background: #015249;
//   }
  
//   .header-area .main-nav {
//     min-height: 80px;
//     background: transparent;
//   }
  
//   .header-area .main-nav .logo {
//     line-height: 80px;
//     color: #57bc90;
//     font-size: 32px;
//     font-weight: 800;
//     text-transform: uppercase;
//     float: left;
//   }
  
//   .header-area .main-nav .logo em {
//     font-style: normal;
//     color: #57bc90;
//     font-weight: 900;
//   }
  
//   .header-area .main-nav .nav {
//     float: right;
//     margin-top: 27px;
//     margin-right: 0px;
//     background-color: #015249;
//     -webkit-transition: all 0.3s ease 0s;
//     -moz-transition: all 0.3s ease 0s;
//     -o-transition: all 0.3s ease 0s;
//     transition: all 0.3s ease 0s;
//     position: relative;
//     z-index: 999;
//   }
  
//   .header-area .main-nav .nav li {
//     padding-left: 20px;
//     padding-right: 20px;
//   }
  
  
//   .header-area .main-nav .nav li a {
//     color: #57bc90;
//   }
  
//   .header-area .main-nav .nav li:last-child a {
//     display: inline-block;
//     padding: 11px 17px;
//     background-color: #57bc90;
//     color: #015249;
//     text-align: center;
//   }
  
//   .header-area .main-nav .nav li:hover a,
//   .header-area .main-nav .nav li a.active {
//     color: #77C9D4!important;
//   }
  
//   .background-header .main-nav .nav li:hover a,
//   .background-header .main-nav .nav li a.active {
//     color: #77C9D4!important;
//     opacity: 1;
//   }
  
  
//   .header-area.header-sticky {
//     min-height: 80px;
//   }
  
//   .header-area.header-sticky .nav {
//     margin-top: 20px !important;
//   }
  
//   .header-area.header-sticky .nav li a.active {
//     color: #77C9D4;
//   }
  
//   @media (max-width: 1200px) {
//     .header-area .main-nav .nav li {
//       padding-left: 12px;
//       padding-right: 12px;
//     }
//     .header-area .main-nav:before {
//       display: none;
//     }
//   }
  
//   @media (max-width: 767px) {
//     .header-area .main-nav .logo {
//       color: #1e1e1e;
//     }
//     .header-area.header-sticky .nav li a:hover,
//     .header-area.header-sticky .nav li a.active {
//       color: #77C9D4;
//     }
//     .header-area {
//       background-color: #015249;
//       padding: 0px 15px;
//       height: 80px;
//       box-shadow: none;
//       text-align: center;
//     }
//     .header-area .container {
//       padding: 0px;
//     }
//     .header-area .logo {
//       margin-left: 30px;
//     }
//     .header-area .menu-trigger {
//       display: block !important;
//     }
//     .header-area .main-nav {
//       overflow: hidden;
//     }
//     .header-area.header-sticky .nav {
//       margin-top: 80px !important;
//     }
//     .header-area .main-nav .nav li {
//       width: 100%;
//       background: #fff;
//       border-bottom: 1px solid #eee;
//       padding-left: 0px !important;
//       padding-right: 0px !important;
//     }
//     .header-area .main-nav .nav li a {
//       height: 50px !important;
//       line-height: 50px !important;
//       padding: 0px !important;
//     }
//     .header-area .main-nav .nav li a:hover {
//       color: #77C9D4!important;
//     }
//   }
  

//   .navbar-brand{
//       padding: unset !important;
//   }
//   .header-area .navbar-expand-lg .navbar-collapse{
//       justify-content: flex-end;
//   }
//   .header-area .main-nav .nav li a, .header-area .main-nav .logo{
//       line-height: unset !important;
//   }