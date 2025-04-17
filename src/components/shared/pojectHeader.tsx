import { Link } from "react-router-dom";
import { ProjectHeaderInterface } from "../../../types";

const ProjectHeader = ({ project }: { project: ProjectHeaderInterface }) => {
  return (
    <section className="p-4">
      {/* Preview Image */}
      <img
        src={project.previewImage}
        className="w-full object-cover object-center h-40 md:h-70 rounded"
      />
      {/* Tools and Links */}
      <div className="w-full px-4 flex justify-between items-center">
        <div className="tools flex gap-4 mt-4 justify-start items-center">
          {project.tools?.map((toolRow, rowIndex) => (
            <div key={rowIndex} className="flex gap-2">
              {toolRow.map((tool, index) => (
                <div
                  key={`${rowIndex}-${index}`}
                  className="flex items-center gap-2 mt-2"
                >
                  <img src={tool.icon} alt={tool.name} width={30} height={30} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="links mt-4 flex justify-end">
          {project.attachments?.map((attachment, attachmentIdx) => (
            <Link
              to={attachment.link}
              target="_blank"
              rel="noopener noreferrer"
              key={attachmentIdx}
              className="flex items-center gap-2 mt-2 mr-1 cursor-pointer rounded-full border p-2 pr-4 w-fit group"
            >
              <img
                src={attachment.type.icon}
                className="w-5 inline-block md:opacity-70 group-hover:opacity-100 transition duration-300 ease-in-out"
              />
              <p className="text-sm text-gray-500 text-nowrap group-hover:text-blue-400 transition duration-300 ease-in-out">
                {attachment.type.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      {/* Header */}
      <div className="mt-10 mb-5">
        <h2 className="text-3xl mb-4 font-bold text-blue-800">
          {project.title}
        </h2>
        <p className="text-sm text-gray-500 mt-1">{project.description}</p>
      </div>
      <hr />
    </section>
  );
};

export default ProjectHeader;
