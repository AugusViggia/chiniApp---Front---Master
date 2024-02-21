import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/slice/homeSlice";
import axios from "axios";
import { isValidInstagramUsername } from "../validations/validations";

export const useCartHandlers = (
  setInstagramUsername,
  setTouched,
  setError,
  setModalEmptyOpen
) => {
  const apiURL = "https://chiniapp-api-production.up.railway.app";
  // const apiURL = "http://localhost:3000";

  const dispatch = useDispatch();

  const handleSubmitModal = async (
    cartList,
    clientInstagramUsername,
    totalPrice
  ) => {
    try {
      const response = await axios.post(`${apiURL}/create-order`, {
        cartList,
        clientInstagramUsername,
        totalPrice,
      });
      const initPoint = response.data.init_point;
      console.log("esta es la response.data", response.data);
      window.location.href = initPoint;
    } catch (error) {
      console.log("soy el error", error);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    setInstagramUsername(inputValue);
    setTouched(true);

    const isUsernameValid = isValidInstagramUsername(inputValue);

    setError(isUsernameValid ? "" : "Usuario de Instagram no válido");
  };

  const handleModalCancel = () => {
    setModalEmptyOpen(false);
  };

  const handleModalYes = () => {
    dispatch(emptyCart());

    setModalEmptyOpen(false);
  };

  return {
    handleSubmitModal,
    handleInputChange,
    handleModalCancel,
    handleModalYes,
  };
};