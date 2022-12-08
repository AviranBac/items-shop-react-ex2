import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router";

const ShopNavbar = () => {
    const { pathname } = useLocation();

    return (
        <Navbar bg="primary" variant="dark">
            <Container className="justify-content-start m-0">
                <Navbar.Brand>Items Shop</Navbar.Brand>
                <Nav activeKey={pathname}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default ShopNavbar;