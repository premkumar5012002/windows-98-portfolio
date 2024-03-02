import Image from "next/image";
import { FC, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { useWindowStore } from "@/store/window";
import { useWindowSize } from "usehooks-ts";

import { FormState, submitMail } from "@/server/actions";
import { Modal } from "../Modal";

const initialState: FormState = {};

export const Mail: FC = () => {
  const { pending } = useFormStatus();

  const { openWindow } = useWindowStore();

  const { width, height } = useWindowSize();

  const [state, formAction] = useFormState(submitMail, initialState);

  useEffect(() => {
    if (state.error || state.message) {
      openWindow({
        id: state.error ? "error" : "success",
        title: state.error ? "Error" : "Success",
        isFullScreen: false,
        isMinimized: false,
        x: (width - 400) / 2,
        y: (height - 400) / 2,
        width: 350,
        height: 200,
        component: (
          <Modal
            message={
              state.error ? (
                state.error === "Invalid data." ? (
                  state.error
                ) : (
                  <span>
                    Unable to send your mail, please contact by mail{" "}
                    <span className="text-accent">
                      premkumar5012002@gmail.com
                    </span>
                  </span>
                )
              ) : (
                state.message
              )
            }
            isError={state.error ? true : false}
          />
        ),
      });
    }
  }, [state, width, height, openWindow]);

  return (
    <form action={formAction} className="flex h-full flex-col">
      <div className="space-y-2 px-1 py-2 text-gray-600">
        <h3 className="px-1 py-1.5 text-2xl font-bold text-black">
          New Message
        </h3>

        <div className="border border-b-white border-t-[#808080]" />

        <div className="flex gap-3 px-1">
          To: <span className="text-black">premkumar5012002@gmail.com</span>
        </div>

        <div className="border border-b-white border-t-[#808080]" />

        {/* From */}
        <div className="flex gap-3 px-1">
          From:{" "}
          <input
            required
            autoFocus
            name="from"
            type="email"
            className="w-full bg-transparent text-black outline-none"
          />
        </div>

        <div className="border border-b-white border-t-[#808080]" />

        {/* Subject */}
        <div className="flex gap-3 px-1">
          Subject:{" "}
          <input
            required
            type="text"
            name="subject"
            className="w-full bg-transparent text-black outline-none"
          />
        </div>

        <div className="border border-b-white border-t-[#808080]" />
      </div>

      {/* Message */}
      <div className="h-full px-2">
        <textarea
          required
          name="message"
          className="h-full w-full resize-none bg-transparent outline-none"
        />
      </div>

      {/* Send Button */}
      <div className="flex items-center gap-4 px-1 pb-1 pt-2">
        <button
          type="submit"
          aria-disabled={pending}
          className="button-98 w-fit gap-1 px-2 py-0.5 text-sm"
        >
          <Image
            priority
            width={20}
            height={20}
            alt="Send Mail"
            src="/icons/send_mail.png"
          />
          {pending ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};
