import { toast } from "react-toastify";

const showToastify = (text, type = 'success') => {
  const textToast = text
  switch(type) {
    case "success":
      toast.success(textToast)
      break;
    case "warning":
        toast.warning(textToast)
        break;
    case "error":
      toast.error(textToast)
      break;
    default:
      toast(textToast)
  }
}

export default showToastify