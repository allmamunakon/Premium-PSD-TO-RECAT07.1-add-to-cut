import React, { useEffect, useState } from 'react'


export default function Api() {
     const [nayoks, setNayoks] = useState([])
    useEffect(() =>{
        fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        // fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then(data => setNayoks(data))
        // .then(data => console.log(data))
    },[])
       
    // const nayoks = [{name: 'mamun' , age: '54', }, {color: 'Navy'}, {name: 'melon' , age: '43'},{name: 'kaka' , age: '42'},{name: 'kaka' , age: '42'}]

  return (
    <div>     
       {
            nayoks.map(nk => <li style={{background: 'SlateBlue', color: 'black', border: '2px solid red', borderRadius: '5px', margin: '4px', padding: '2px', fontSize: '25px'}} >  category: {nk.category} img: {nk.img} url: {nk.url} key: {nk.key}</li>) 
     }
    </div>
  )
}


// nayoks.map(nk => <li style={{background: 'SlateBlue', color: 'black', border: '2px solid red', borderRadius: '5px', margin: '4px', padding: '2px', fontSize: '25px'}} >   id: {nk.id} Name:{nk.name}User:{nk.username} Zip code:{nk.zipcode} add-city:{nk.address.city} Company-name:{nk.company.name} Phone: {nk.phone}  img: {nk.img}</li>) 