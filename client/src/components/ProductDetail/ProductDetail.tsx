import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';

export function ProductDetail(){
    const {id} = useParams< {id:string} >();
    const [product, SetProduct] = useState<any>(null);

    useEffect(() => {
        const apiUrl = 'http://localhost:5001/api'; // Replace with your server URL
        fetch(`${apiUrl}/products/${id}`)
        .then((res) => res.json())
        .then((data) => SetProduct(data))
        .catch((error) => console.error('Error fetching product:' , error));
    }, [id])

    if(!product){
        return <div>Loading...</div>
    }
    return (
        <div>
            <h2>Product Details</h2>
            <strong>{product.name}</strong>
            <br />
            {product.description}
        </div>
    )
}