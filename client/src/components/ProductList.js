import React from "react";
import { Link } from "@reach/router"

const ProductList = (props) => {
    const { products } = props;

    return (
        <div>
            <div className="Separator"></div>
            <h3>All Products</h3>
            {
                products.map((product, index) => {
                    return (
                        <p key={ index }>
                            <Link to={ "/products/" + product._id }>
                                { product.title }
                            </Link>
                        </p>
                    )
                })
            }
        </div>
    )
}

export default ProductList;