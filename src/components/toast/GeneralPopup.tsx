import { CheckCircle, TriangleAlertIcon, Loader2 } from "lucide-react";
import { useEffect } from "react";

interface PopupModalProps {
  state: "success" | "error" | "loading";
  onClose: () => void;
  message: string;
}

const GeneralPopup = ({ state, onClose, message }: PopupModalProps) => {
  useEffect(() => {
    if (state !== "loading") {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state, onClose]);

  return (
    <div className="fixed w-full z-50 backdrop-blur h-full left-0 bottom-0">
      <div className="w-full h-full flex justify-center items-center">
        {state === "success" && (
          <div className="w-96 h-48 bg-green-100 rounded-lg shadow-lg flex flex-col justify-center items-center p-4">
            <h2 className="text-green-700 flex gap-2 items-center text-2xl font-semibold mb-2">
              <CheckCircle className="w-8 h-8" />
              Success!
            </h2>
            <p className="text-green-600 mb-4">{message}</p>
          </div>
        )}

        {state === "error" && (
          <div className="w-96 h-48 bg-red-100 rounded-lg shadow-lg flex flex-col justify-center items-center p-4">
            <h2 className="text-red-700 flex gap-2 items-center text-2xl font-semibold mb-2">
              <TriangleAlertIcon className="w-8 h-8" />
              Error!
            </h2>
            <p className="text-red-600 mb-4">{message}</p>
          </div>
        )}

        {state === "loading" && (
          <div className="w-96 h-48 bg-black rounded-lg shadow-lg flex flex-col justify-center items-center p-4">
            <Loader2 className="animate-spin w-10 h-10 text-white mb-4" />
            <p className="text-blue-600 text-lg">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralPopup;
