import React from 'react';
import { logOut } from '../services/User'
import { Navbar, Nav } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

const NavBar = ({style = {}}: {style?: React.CSSProperties}) : JSX.Element => {
  const router = useRouter();

  const logoutHandler = () => {
    logOut();
    router.push('/login');
  }
  return (
    <Navbar bg="dark" className={'ms-3 me-5'} style={style} variant="dark" expand="lg">
      <Navbar.Brand href="/">MTG in Game list</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav className="ml-auto" onClick={logoutHandler}>
            <Nav.Link as={'span'}>Logout</Nav.Link>
        </Nav>  
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
