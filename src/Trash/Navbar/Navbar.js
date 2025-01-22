// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import "./NavbarTop.css";
// import { FaGoogleDrive } from "react-icons/fa";

// const Navbars = () => {
//   const [navcolor, setNavcolor] = useState(false);
//   const path = window.location.pathname;

//   const changeBackground = () => {
//     if (window.scrollY >= 80) {
//       setNavcolor(true);
//     } else {
//       setNavcolor(false);
//     }
//   };
//   window.addEventListener("scroll", changeBackground);

//   return (
//     <>
//       <Navbar
//         collapseOnSelect
//         expand="md"
//         className={
//           navcolor
//             ? "nav-container colorChange fixed-top mt-3"
//             : "nav-container fixed-top mt-3"
//         }
//       >
//         <Navbar.Brand>
//           <Nav.Link as={Link} to={"/#"}>
//             <img
//               src="https://www.smsfoundation.org/wp-content/uploads/2023/10/agriculture.png"
//               alt=""
//               className="agrigreen-logo"
//             />
//             <span className="nav-heading">Agrigreen</span>
//           </Nav.Link>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse
//           id="responsive-navbar-nav"
//           className="content-container"
//         >
//           <Container className="nav-content">
//             <Nav>
//               <Nav.Link
//                 as={Link}
//                 to={"/#"}
//                 className={`${path === "/" && "nav-link active font-bold"}`}
//               >
//                 Home
//               </Nav.Link>

//               <Nav.Link
//                 as={Link}
//                 to={"/about"}
//                 className={`${
//                   path === "/about" && "nav-link active font-bold"
//                 }`}
//               >
//                 About Us
//               </Nav.Link>

//               <Nav.Link
//                 as={Link}
//                 to={"/event"}
//                 className={`${
//                   path === "/event" && "nav-link active font-bold"
//                 }`}
//               >
//                 Events
//               </Nav.Link>

//               <Nav.Link
//                 as={Link}
//                 to={"/getInvolved"}
//                 className={`${
//                   path === "/gallery" && "nav-link active font-bold"
//                 }`}
//               >
//                 Get Involved
//               </Nav.Link>

//               <Nav.Link
//                 as={Link}
//                 to={"/contact"}
//                 className={`${
//                   path === "/contact" && "nav-link active font-bold"
//                 }`}
//               >
//                 Contact Us
//               </Nav.Link>

//               <Nav.Link
//                 as={Link}
//                 to={"/resource"}
//                 className={`ml-auto ${
//                   path === "/resource" && "nav-link active font-bold"
//                 }`}
//               >
//                 Resources
//                 <FaGoogleDrive className="resource-icon" />
//               </Nav.Link>
//             </Nav>

//             <Nav>
//               <Nav>
//                 <Nav.Link
//                   as={Link}
//                   to={"/donate"}
//                   className={`${path === "/donate" && "font-bold ml-5 "}`}
//                 >
//                   <button className="btn btn-warning">Donate</button>
//                 </Nav.Link>
//               </Nav>
//             </Nav>
//           </Container>
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// };

// export default Navbars;
