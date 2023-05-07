import ListaItem from "../Item/Item"

const ItemList = ({productos }) => {
    return(
        <div className='ListGroup'>            
            {productos.map(prod => <ListaItem key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList
