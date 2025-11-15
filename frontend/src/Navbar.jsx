import { Navbar, Container, NavbarBrand, NavbarCollapse } from 'react-bootstrap'
import logo from './assets/logo.jpg'
import user from './assets/user.png'
import './Navbar.css'

function MyNav() {
    return (
        <Navbar fixed="top" expand='lg' className="bg-secondary rounded-bottom">
            <Container>
                <NavbarBrand href="#home">
                    <img src={logo} alt="Logo" width="40" height="40" className='d-inline-block align-top' />
                </NavbarBrand>
                <NavbarCollapse className='justify-content-end' href="#settings">
                    <Navbar.Brand href="#home">
                        <img src={user} alt="Logo" width="40" height="40" className='d-inline-block align-top' />
                    </Navbar.Brand>
                    {/* <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by kmg design - Flaticon</a> */}
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}

export default MyNav