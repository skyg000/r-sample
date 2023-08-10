import React from 'react'
import Item from './Item'


function Prouduct({data}) {
    
    return (
        <>
        <h2>Product</h2>
        <div>
            {
                /* data.map(function(){
                    return
                }) */
                data.map((item,k)=>(
                <Item key={item.id} item={item}/>
                ))
            }
        </div>
        </>
    )
}

export default Prouduct