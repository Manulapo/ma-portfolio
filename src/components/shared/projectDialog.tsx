import { ProjectHeaderInterface } from "../../../types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ProjectHeader from "./pojectHeader";

const ProjectDialog = ({
  project,
  children,
}: {
  project: ProjectHeaderInterface;
  children?: React.ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger className="h-full w-full flex items-center justify-center cursor-pointer">
        {children}
      </DialogTrigger>

      <DialogContent className="min-w-[90vw] h-[98vh] w-screen md:min-w-[90vw] md:h-[90vh] md:w-3/4 pt-6 pb-6 overflow-auto">
        <DialogHeader>
          <DialogTitle className="fixed">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 overflow-x-hidden overflow-y-auto ">
          <ProjectHeader project={project} />
          <project.contentComponent />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
