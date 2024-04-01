import Image from "next/image";
import { FC } from "react";

const PROJECTS = [
  {
    title: "CloudVault",
    image: "/screenshots/cloudvault.webp",
    imageAlt: "CloudVault Screenshot",
    href: "https://github.com/premkumar5012002/cloud-vault",
    description: [
      "Designed and implemented a web-based cloud storage platform using React and AWS services such as S3 and lambda.",
      "Implemented an async file upload feature that supports uploading a maximum of 5 files at a time, with real-time progress tracking.",
      "Developed a AWS Lambda function to handle webhook events when files are uploaded to S3, ensuring data is properly updated in database when file is uploaded.",
    ],
  },
  {
    title: "QuickNotes",
    image: "/screenshots/quicknotes.webp",
    imageAlt: "QuickNotes Screenshot",
    href: "https://github.com/premkumar5012002/quick-notes",
    description: [
      "Utilized Tiptap rich text editing features, such as inline styling, code blocks, to enhance the note-taking experience.",
      "Utilized Lucia auth to handle user authentication and session management.",
      "Implemented custom throttling for login, forget password and verify email functionality to prevent brute force attacks.",
    ],
  },
  {
    title: "Discuss",
    image: "/screenshots/discuss.webp",
    imageAlt: "Discuss Screenshot",
    href: "https://github.com/premkumar5012002/discuss",
    description: [
      "Implemented next.js streaming for fetching comments for the post, resulting in faster page load time.",
      "Implemented Optimistic Updates for upvoting and downvoting posts to provide instantaneous feedback for user actions.",
      "Utilized Tiptap rich text editor for post creation.",
    ],
  },
  {
    title: "DrawThing",
    image: "/screenshots/drawthing.webp",
    imageAlt: "Drawthing Screenshot",
    href: "https://github.com/premkumar5012002/draw-thing",
    description: [
      "Implemented a drawing app using React and Tailwind CSS.",
      "Implemented ability to pan, zoom and easily correct mistakes and revert changes with undo and redo options.",
      "Implemented drawing tools such as rectangle tool, line tool, move tool and pencil tool.",
    ],
  },
];

export const Projects: FC = () => {
  return (
    <div className="overflow-auto">
      <div className="mx-auto flex max-w-4xl flex-col px-6 py-8">
        <h2 className="text-3xl font-bold">Projects</h2>

        {PROJECTS.map((project, i) => (
          <div key={project.title}>
            <div className="my-8 border border-b-white border-t-[#808080]" />

            <div className="space-y-6">
              <h3 className="text-xl font-bold">
                {i + 1}. {project.title}
              </h3>

              <div>
                <a target="_blank" href={project.href}>
                  <Image
                    priority
                    width={project.title === "Costfocus" ? 400 : 950}
                    height={1280}
                    src={project.image}
                    className="mx-auto"
                    alt={project.imageAlt}
                  />
                </a>
              </div>

              <ul className="list-inside list-disc space-y-3 pl-1">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
