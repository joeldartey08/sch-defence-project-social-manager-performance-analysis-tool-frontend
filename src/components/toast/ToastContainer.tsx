import { useToastStore } from "../../store/useToastStore";
import GeneralPopup from "./GeneralPopup";

function ToastContainer() {
  const { isOpen, type, message, closeToast } = useToastStore();

  if (!isOpen || !type) return null;

  return <GeneralPopup state={type} message={message} onClose={closeToast} />;
}

export default ToastContainer;
