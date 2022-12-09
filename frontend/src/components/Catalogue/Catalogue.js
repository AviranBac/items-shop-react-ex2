import { Card, CardGroup, Form } from "react-bootstrap";
import './Catalogue.css';

const Catalogue = (props) => {
    const { products, cartProducts } = props;

    return (
        <div>
            <h1 className="title">Catalogue</h1>

            <CardGroup className="row row-cols-1 row-cols-md-3 w-75 m-auto">
                {products.map(product => (
                    <div key={product._id} className="col mb-5">
                        <Card className="product-card text-center h-100">
                            <Card.Img variant="top" className="product-img m-auto" src={product.imageUrl} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                                <span className="text-muted w-50">
                                        Price: {product.price}
                                </span>
                                <span className="text-muted d-flex flex-row w-100">
                                    <span className="m-auto w-100">Currently in Cart:</span>
                                    <Form.Control type="number"
                                                  className="text-center"
                                                  min={0}
                                                  defaultValue={cartProducts[product._id]?.quantity || 0}
                                                  onChange={(event) => props.onCartUpdate(product, +event.target.value)} />
                                </span>
                            </Card.Footer>
                        </Card>
                    </div>
                ))}
            </CardGroup>
        </div>
    );
}

export default Catalogue;