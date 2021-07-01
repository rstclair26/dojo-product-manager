import React from "react";
import axios from "axios";

const DeleteProduct = (props) => {
    const { id, postDeleteHandler } = props;

    const onDeleteHandler = (e, id) => {
        e.preventDefault();

        axios.delete("http://localhost:8000/api/products/" + id)
            .then((res) => {
                console.log(res.data);
                postDeleteHandler(id);
            })
            .catch((err) => console.log(err))
    }

    return (
        <button onClick={ (e) => onDeleteHandler(e, id) }>Delete</button>
    )
}

export default DeleteProduct;