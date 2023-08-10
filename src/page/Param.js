import React from 'react'
import {useParams,} from 'react-router-dom'
function Param({data}) {
    const {code} =useParams();
    let detail = data.filter(obj=>obj.id === code)

    /*  data.filter(function(obj,key){
        return obj.id === code
    }) */

    return (
        <div>{detail[0].name}</div>
    )
}

export default Param