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
