import ListaItem from "../Item/Item"

const ItemList = ({products }) => {
    return(
        <div className='ListGroup'>            
            {products.map(prod => <ListaItem key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList
