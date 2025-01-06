import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ErrorToast = (message, options = {}) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    style: {
      color: "#FE655A",
      fontWeight: "500",
      padding: "10px 15px",
      borderRadius: "8px",
      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
    },
    ...options,
  });
};

export default ErrorToast;
