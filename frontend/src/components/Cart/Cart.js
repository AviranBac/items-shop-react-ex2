import { Button, Col, Form, Table } from "react-bootstrap";
import { useEffect, useState } from "react";

const Cart = (props) => {
    const { cartProducts } = props;
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ validated, setValidated ] = useState(false);
    const [ shouldPostOrder, setShouldPostOrder ] = useState(false);

    const totalPrice = Object.values(cartProducts).reduce((acc, currProduct) =>
        acc + currProduct.price * currProduct.quantity
    , 0);

    const onFirstNameChangeHandler = (event) => setFirstName(event.target.value);
    const onLastNameChangeHandler = (event) => setLastName(event.target.value);
    const onSubmitHandler = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            setShouldPostOrder(true);
        }

        setValidated(true);
    }

    useEffect(() => {
        if (shouldPostOrder) {
            const order = {
                firstName,
                lastName,
                totalPrice,
                products: Object.values(cartProducts)
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(order)
            };

            fetch("http://localhost:8080/orders", requestOptions)
                .then(() => props.onCartPurchase())
                .catch(console.error);

            setShouldPostOrder(false);
        }
    }, [shouldPostOrder]);

    return (
        <div>
            <h1 className="title">Cart</h1>

            <Form noValidate
                  validated={validated}
                  onSubmit={onSubmitHandler}
                  className="d-flex flex-column gap-4">
                <Form.Group as={Col} md="4" controlId="firstNameValidation" className="m-auto">
                    <Form.Control type="text"
                                  placeholder="First Name"
                                  required
                                  onChange={onFirstNameChangeHandler} />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid first name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="lastNameValidation" className="m-auto">
                    <Form.Control type="text"
                                  placeholder="Last Name"
                                  required
                                  onChange={onLastNameChangeHandler} />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid last name.
                    </Form.Control.Feedback>
                </Form.Group>

                <Table striped bordered hover className="w-75 m-auto">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price for single product</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(cartProducts).map(([key, product], index) => (
                        <tr key={key}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    ))}
                    <tr>
                        <th colSpan={4} className="text-center">Total price: {totalPrice}</th>
                    </tr>
                    </tbody>
                </Table>

                <Button type="submit"
                        variant="primary"
                        disabled={Object.keys(cartProducts).length === 0}
                        className="m-auto">Purchase</Button>
            </Form>
        </div>
    );
}

export default Cart;