import { FC, ReactNode } from "react";
import Image from "next/image";

import { useWindowStore } from "@/store/window";

export const Modal: FC<{
  isError: boolean;
  message?: string | ReactNode;
}> = ({ isError, message }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4">
      <Image
        priority
        width={40}
        height={40}
        alt={isError ? "Error" : "Success"}
        src={isError ? "/icons/error.png" : "/icons/success.png"}
      />

      <p className="text-sm font-bold">{message}</p>

      <button
        className="button-98 px-2"
        onClick={() => closeWindow(isError ? "error" : "success")}
      >
        Close
      </button>
    </div>
  );
};
