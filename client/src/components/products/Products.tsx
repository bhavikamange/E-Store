import React, { useState, useEffect } from 'react';
import { ProductList } from '../ProductList/ProductList';

export function Products() {

    const [data, setData] = useState(null);

    useEffect(() => {
        // Define the API URL (replace with your server URL)
        const apiUrl = 'http://localhost:5001/api'; // Replace with your server URL
    
        // Make the API call when the component mounts
        fetch(`${apiUrl}/products`)
          .then((response) => {
            console.log("response", response)
            return (response.json())
          }).then((data) => {
            console.log("data", data);
            // Update the state with the fetched products
            setData(data?.data ?? []);
          })
      }, []); 

    return (
        <div>
            <h1>Product Catolog</h1>
            <ProductList data={data}></ProductList>
        </div>
    )
}