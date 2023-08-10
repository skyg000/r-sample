import React from 'react'
import Item_b from './Item_b'

function Prouduct_b({data}) {
    
    return (
        <>
        <h2>Product_b</h2>
        <div>
            {
            data.map((item,k)=>(
                <Item_b key={item.id} item={item}/>
                ))
            }
        </div>
        </>
    )
}

export default Prouduct_b