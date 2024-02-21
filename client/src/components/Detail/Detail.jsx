import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useProductHandlers } from "../../handlers/productHandlers";
import { useGetProductsQuery } from "../../firebase/services/firebaseApi";
import style from "./Detail.module.css";

const Detail = () => {
    const { id } = useParams();
    const { data } = useGetProductsQuery();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    
    useEffect(() => {
        const products = data || [];
        const fetchedProduct = products.find(
            (product) => product.id === parseInt(id)
        );

        if (fetchedProduct) {
            setProduct(fetchedProduct);
        } else {
            setProduct(null);
        };

    }, [id, data]);

    const { handleAddToCart, handleIncrementDetail, handleDecrementDetail } =
        useProductHandlers();

    if (!product) {
        return <div>Product not found</div>;
    }

    const totalPrice = product.price * quantity;

    return (
        <div className={style.mainContainer}>
            <div className={style.productContainer}>
            <div className={style.productLink}>
                {product.images && product.images.length > 0 && (
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className={style.image}
                    />
                )}
            </div>
            <div className={style.descriptionContainer}>
                <h3 className={style.productTitle}>{product.name}</h3>
                <p className={style.productDescription}>{product.description}</p>
                <p className={style.productPrice}>Precio: ${product.price}</p>
            </div>

            <div className={style.secondaryContainer}>
                <div className={style.quantityContainer}>
                    <button
                        onClick={() => {
                            if (quantity > 1) {
                                handleDecrementDetail(product, quantity);
                                setQuantity((prevQuantity) => prevQuantity - 1);
                            }
                        }}
                        className={style.quantityButton}
                    >
                        -
                    </button>

                    <span className={style.quantity}>{quantity}</span>

                    <button
                        onClick={() => {
                            handleIncrementDetail(product, quantity);
                            setQuantity((prevQuantity) => prevQuantity + 1);
                        }}
                        className={style.quantityButton}
                    >
                        +
                    </button>
                </div>

                <Link
                    to="/products"
                    onClick={() => handleAddToCart(product, quantity, setQuantity(1))}
                    className={style.addToCartButton}
                >
                    Añadir al Carrito ${totalPrice}
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Detail;
