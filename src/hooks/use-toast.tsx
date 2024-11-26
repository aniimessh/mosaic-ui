import { toast } from "sonner";

const useToast = () => {
  const showToast = (message: string) => {
    const position = window.innerWidth <= 768 ? "top-center" : "bottom-right";
    toast.success(message, { position });
  };

  return { showToast };
};

export default useToast;
