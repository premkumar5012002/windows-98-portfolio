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

        <div className="pt-8">
          <h3 className="text-xl font-bold">About Me</h3>
          <p className="pt-3">
            Junior Software Engineer based in Chennai. Strong skills in
            Javascript, Typescript and Dart through experience building full
            stack applications using React and Flutter.
          </p>
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-bold">Web Developer</h3>
          <p className="pt-3">
            As a web developer, I have also had a lot of chances to practice and
            participate in projects to further hone my skills. I have plenty of
            experience with backend as well as databases using SQL or NoSQL
            solutions. But most of my time is dedicated to frontend development
            using react.js and elaborate styling of websites (such as this one
            😁).
          </p>
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-bold">Mobile Developer</h3>
          <p className="pt-3">
            As a mobile developer, I have also had a lot of chances to build
            mobile applictions using flutter both for personal and freelance
            projects. You can check out my projects{" "}
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.appmakerss.costfocus&hl=en&gl=US"
              className="text-accent underline"
            >
              Costfocus
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.bitsandbytes.learntogether&hl=en&gl=IN"
              className="text-accent underline"
            >
              Tutrpro
            </a>{" "}
            on Google play store.
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
