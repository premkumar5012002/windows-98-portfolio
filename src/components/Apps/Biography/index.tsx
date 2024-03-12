import { FC } from "react";
import { Icon } from "@iconify/react";

export const Biography: FC = () => {
  return (
    <div className="overflow-auto">
      <div className="mx-auto w-full max-w-3xl p-6">
        <div>
          <h2 className="text-3xl font-bold">Prem Kumar</h2>
          <p className="pt-3 text-base text-slate-600">Full Stack Developer</p>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <Icon icon="devicon:html5" className="h-6 w-6" />
          <Icon icon="devicon:css3" className="h-6 w-6" />
          <Icon icon="devicon:javascript" className="h-6 w-6" />
          <Icon icon="devicon:typescript" className="h-6 w-6" />
          <Icon icon="devicon:dart" className="h-6 w-6" />
          <Icon icon="logos:react" className="h-6 w-6" />
          <Icon icon="devicon:nextjs" className="h-6 w-6" />
          <Icon icon="skill-icons:expressjs-dark" className="h-6 w-6" />
          <Icon icon="devicon:flutter" className="h-6 w-6" />
          <Icon icon="devicon:git" className="h-6 w-6" />
          <Icon icon="logos:docker-icon" className="h-6 w-6" />
        </div>

        <div className="mt-6 border-2  border-white border-b-black border-r-black bg-accent p-4 font-sans text-white">
          <p>
            I&apos;m actively seeking a full stack developer position. If your
            team needs someone with experience in React, Next.js, or backend
            technologies like REST or GraphQL, feel free to reach out to me via
            email at{" "}
            <a
              target="_blank"
              className="font-bold underline"
              href="mailto:premkumar5012002@gmail.com"
            >
              premkumar5012002@gmail.com
            </a>{" "}
          </p>
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-bold">About Me</h3>
          <p className="pt-3">
            As a Full Stack Software Developer, I specialize in Frontend
            Development using React and backend technologies like Rest and
            GraphQL APIs. My focus is on delivering exceptional user experiences
            and optimizing performance through innovative solutions.
          </p>
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-bold">Web Developer</h3>
          <p className="pt-3">
            As a web developer, I&apos;ve honed my skills through various
            projects, with extensive experience in backend development and
            database management using SQL or NoSQL solutions. My primary focus
            lies in frontend development using React.js, alongside meticulous
            styling to enhance user interfaces.
          </p>
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-bold">Mobile Developer</h3>
          <p className="pt-3">
            As a mobile developer, I specialize in creating mobile applications
            using Flutter, both for personal and freelance projects. You can
            explore examples of my work, such as{" "}
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.appmakerss.costfocus&hl=en&gl=US"
              className="font-bold text-accent underline"
            >
              Costfocus
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.bitsandbytes.learntogether&hl=en&gl=IN"
              className="font-bold text-accent underline"
            >
              Tutrpro
            </a>{" "}
            on the Google Play Store.
          </p>
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-bold">Résumé</h3>
          <p className="pt-3">
            <a
              target="_blank"
              href="/documents/prem_kumar_resume.pdf"
              className="text-accent underline"
            >
              Check out my résumé here 👉.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
