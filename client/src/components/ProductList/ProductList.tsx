
import React from 'react';

export function ProductList(props: any) {
    return (
        <div>
            <ul>
                {
                    (props?.data ?? []).map((item:any) => {
                        return(
                        <li key = {item.id}
                        style ={{marginBottom: '10px'}}>
                        <strong>{item.name}</strong> <br/>
                        {item.description}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

