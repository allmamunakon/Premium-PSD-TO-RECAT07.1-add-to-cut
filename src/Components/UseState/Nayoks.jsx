import React from 'react'

export default function Nayoks() {
        const nayoks = [{name: 'mamun' , age: '54', }, {color: 'Navy'}, {name: 'melon' , age: '43'},{name: 'kaka' , age: '42'},{name: 'kaka' , age: '42'}]
  return (
    <div >
        {
            nayoks.map(nk => <li style={{background: 'SlateBlue', color: 'black', border: '2px solid red', borderRadius: '5px', margin: '4px', padding: '2px', fontSize: '25px'}}>Description={nk.Description} Auth= {nk.Auth} Link={nk.Link} API = {nk.API}</li>) 

        }
      
    </div>
  )
}
