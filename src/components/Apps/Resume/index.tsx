import { FC } from "react";
import Image from "next/image";

export const Resume: FC = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-1.5 px-1 py-1.5">
        <a
          href="/documents/prem_kumar_resume.pdf"
          download={true}
          className="button-98 flex w-fit items-center gap-1 px-1.5 py-[2.5px] text-xs text-accent underline"
        >
          <Image
            priority
            width={18}
            height={18}
            alt="File"
            src="/icons/pdf.png"
          />
          Download
        </a>

        <a
          target="_blank"
          href="/documents/prem_kumar_resume.pdf"
          className="button-98 flex w-fit items-center gap-1 px-1.5 py-[2.5px] text-xs text-accent underline"
        >
          <Image
            priority
            width={18}
            height={18}
            alt="Internet"
            src="/icons/internet.png"
          />
          Open In New Tab
        </a>
      </div>

      <div className="border border-b-white border-t-[#808080]" />

      <iframe
        src="/documents/prem_kumar_resume.pdf"
        className="h-full w-full"
      />
    </div>
  );
};
