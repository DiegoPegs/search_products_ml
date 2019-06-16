import axios from 'axios'

export const searchProduct = (search) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${search}`).then(result => {
            resolve(result.data)
        })
    })
}

export const getItemDetail = (id) => {
    return new Promise((resolve, reject) => {
        axios.all([
            axios.get(`https://api.mercadolibre.com/items/${id}`),
            axios.get(`https://api.mercadolibre.com/items/${id}/description`)
        ]).then(([item, description]) => {
            resolve([item, description])
        })
    })
}