import React from 'react'
import './NewCollection.css'
import new_collection from "../Assets/new_collections"
import Item from '../Item/Item';

function NewCollection() {
  return (
    <div className='New-collection'>

        <h1>NewCollection</h1>
         <hr/>
         <div className='collection'>
            {
                new_collection.map((item,i)=>{
                    return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })
            }
        </div>        
        </div>
  )
}

export default NewCollection