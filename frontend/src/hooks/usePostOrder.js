export const usePostOrder = () => {
    const createOrder = (firstName, lastName, totalPrice, products) => {
        const order = {
            firstName,
            lastName,
            totalPrice,
            products
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        };

        return fetch("http://localhost:8080/orders", requestOptions)
            .catch(console.error);
    };

    return { createOrder };
};