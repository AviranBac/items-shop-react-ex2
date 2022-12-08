export const getProducts = () => {
    return fetch("http://localhost:8080/products")
        .then(data => data.json())
        .catch(err => {
            console.error(err);
            return Promise.reject();
        });
};