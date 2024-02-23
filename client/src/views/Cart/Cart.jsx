import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import { useCartHandlers } from "../../handlers/cartHandlers";
import PaymentModal from "../../components/Modals/PaymentModal";
import EmptyCartModal from "../../components/Modals/EmptyCartModal";
import style from "./Cart.module.css";

function Cart() {
  const cartList = useSelector((state) => state.homeSlice.cartList);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalPaymentOpen, setModalPaymentOpen] = useState(false);
  const [isModalEmptyOpen, setModalEmptyOpen] = useState(false);
  const [setInstagramUsername] = useState("");
  const [setTouched] = useState(false);
  const [setError] = useState("");

  const { handleModalYes, handleModalCancel } = useCartHandlers(
    setInstagramUsername,
    setTouched,
    setError,
    setModalEmptyOpen
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));

    const totalSum = cartList.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    setTotalPrice(totalSum);
  }, [cartList]);

  return (
    <div className={style.mainContainer}>
      <h1>Carrito de Compras</h1>
      <div className={style.productList}>
        {cartList.map((product, index) => (
          <Product
            key={index}
            product={product}
            showAddToCartButton={false}
            showViewCartButton={false}
            showQuantityCart={true}
            inCart={true}
          />
        ))}
      </div>

      <p className={style.totalPrice}>Total Price: ${totalPrice}</p>

      <div className={style.cartButtons}>
        <button
          onClick={() => setModalEmptyOpen(true)}
          disabled={cartList.length === 0}
          className={style.emptyCartBtn}
        >
          Empty Cart
        </button>
        <button
          onClick={() => setModalPaymentOpen(true)}
          disabled={cartList.length === 0}
          className={style.payNowBtn}
        >
          Pay Now
        </button>
      </div>

      <EmptyCartModal
        isOpen={isModalEmptyOpen}
        onCancel={handleModalCancel}
        onConfirm={handleModalYes}
      />

      <PaymentModal
        isOpen={isModalPaymentOpen}
        onClose={() => setModalPaymentOpen(false)}
        cartList={cartList}
        totalPrice={totalPrice}
        setModalOpen={setModalPaymentOpen}
        setInstagramUsername={setInstagramUsername}
        setTouched={setTouched}
        setError={setError}
        setIsLoading={true}
        setReloadComponent={true}
        setModalEmptyOpen={setModalEmptyOpen}
      />
    </div>
  );
}

export default Cart;