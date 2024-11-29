import { toast } from "sonner";

type ToastType = "success" | "error" | "info";

const useToast = () => {
  const showToast = (message: string, type: ToastType = "success") => {
    const position = window.innerWidth <= 768 ? "top-center" : "bottom-right";
    toast[type](message, { position });
  };

  return { showToast };
};

export default useToast;
