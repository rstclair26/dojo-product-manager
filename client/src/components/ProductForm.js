import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
    const [ product, setProduct ] = useState({
        title: "",
        price: "",
        description: ""
    });
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
    
        axios.post("http://localhost:8000/api/products", product)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    const onChangeHandler = (e) => {
        let newProduct = { ...product };
        newProduct[e.target.name] = e.target.value;
        setProduct(newProduct);
    }

    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit= { onSubmitHandler }>
                <p>
                    <label htmlFor="id">Title</label>
                    <input id="title" name="title" type="text" onChange={ (e) => onChangeHandler(e) }/>
                </p>
                <p>
                    <label htmlFor="price">Price</label>
                    <input id="price" name="price" type="text" onChange={ (e) => onChangeHandler(e) }/>
                </p>
                <p>
                    <label htmlFor="description">Description</label>
                    <input id="description" name="description" type="text" onChange={ (e) => onChangeHandler(e) }/>
                </p>
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
}

export default ProductForm;