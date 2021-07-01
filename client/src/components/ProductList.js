import React from "react";
import { Link } from "@reach/router"

const ProductList = (props) => {
    const { products } = props;

    return (
        <div>
            <div className="Separator"></div>
            <h3>All Products</h3>
            <table className="ListTable">
                <tbody>
                {
                    products.map((product, index) => {
                        return (
                            <tr key={ index }>
                                <td>
                                    <Link to={ "/products/" + product._id }>
                                        { product.title }
                                    </Link>
                                </td>
                                <td>
                                    <Link to={ "/products/" + product._id + "/edit" }>
                                        <button>Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;