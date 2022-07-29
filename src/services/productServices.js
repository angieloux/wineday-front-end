import products from '../data/products'

export const getProducts = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === (parseInt(id))))
        }, 500)
    })
}

// const getNextId = () => {
//     const maxId = Math.max(...useResolvedPath.map(user => user.id));
//     return maxId + 1;
// }

// export const register = (userObject) => {
//     const newUser = {
//         ...userObject,

//     }
// }