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
            resolve(products.find(post => post.id === (parseInt(id))))
        }, 500)
    })
}