import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewProduct = (props) => {
    const [ product, setProduct ] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err))
    }, [props.id])

    return (
        <div className="Details">
            <h3>{ product.title }</h3>
            <p>Price: { product.price }</p>
            <p>Description: { product.description }</p>
        </div>
    )
}

export default ViewProduct;