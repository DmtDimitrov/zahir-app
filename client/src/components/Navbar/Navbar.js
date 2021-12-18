import { Link } from 'react-router-dom';


import './Navbar.css';
import { useAuthContext } from '../../contexts/AuthContext';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const NavbarMenu = () => {

    const { user } = useAuthContext();

    let guestAuthNav = (
        <>
            <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
        </>
    );

    let userAuthNav = (
        <>
            <Nav.Link as={Link} to={"/logout"}>Logout</Nav.Link>
            <Navbar.Text><a href="#login">{user?.email}</a></Navbar.Text>
        </>
    );

    let userNav = (
        <>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to={"/recipes/my-recipes"}>My Recipes</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/recipes/create"}>
                Add Recipe
            </NavDropdown.Item>
        </>
    );

    return (
        <Navbar bg="dark" variant={"dark"} expand="lg" sticky="top" >
            <Container fluid>
                <Navbar.Brand as={Link} to={"/home"}>Zahir App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: 'none' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                        <Nav.Link as={Link} to={"/chefs"}>Chefs</Nav.Link>
                        <NavDropdown title="Recipes" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to={"/recipes/catalog"}>Catalog</NavDropdown.Item>
                            {
                                user?.email
                                    ? userNav
                                    : ''
                            }

                        </NavDropdown>
                        {
                            user?.email
                                ? userAuthNav
                                : guestAuthNav
                        }

                    </Nav>

                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMenu;