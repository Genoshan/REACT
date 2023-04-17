const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000',
        stock: 25,
        description: 'Es un Iphone 12'
    },
    {
        id: '2',
        name: 'Samsung S23',
        price: 800,
        category: 'celular',
        img: 'https://www.digitaltrends.com/wp-content/uploads/2023/02/samsung-galaxy-s23-ultra-green-back-6.jpg?p=1',
        stock: 25,
        description: 'Es un Samsung S23'
    },
    {
        id: '3',
        name: 'Ipad Pro',
        price: 1200,
        category: 'tablet',
        img: 'https://www.apple.com/au/ipad-pro/images/overview/hero_combo__fcqcc3hbzjyy_large.jpg',
        stock: 25,
        description: 'Es un Iphone 12'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 500)
    }) 
}