import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SuccessToast = (message, options = {}) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    style: {
      color: "#44B851",
      fontWeight: "500",
      padding: "10px 15px",
      borderRadius: "8px",
      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
      width: "400px",
    },
    ...options,
  });
};

export default SuccessToast;
