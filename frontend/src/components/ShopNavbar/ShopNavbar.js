import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router";
import "./ShopNavbar.css";
import { Link } from "react-router-dom";

const ShopNavbar = () => {
    const { pathname } = useLocation();

    return (
        <Navbar bg="primary" variant="dark">
            <Container className="justify-content-start m-0">
                <Navbar.Brand>Items Shop</Navbar.Brand>
                <Nav activeKey={pathname}>
                    <Nav.Link as={Link} to="/">Catalogue</Nav.Link>
                    <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default ShopNavbar;