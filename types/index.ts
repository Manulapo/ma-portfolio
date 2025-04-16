import { LucideProps } from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProjectHeaderInterface {
  contentComponent: React.ComponentType<{
    className?: string;
  }>;
  title: string;
  description: string;
  triggerLabel: string;
  previewImage: string;
  tools: ToolsUsedInterface[][];
  attachments: AttachmentInterface[];
}

export interface ToolsUsedInterface {
  name: string;
  icon: string;
}

export interface AttachmentInterface {
  type: ToolsUsedInterface;
  link: string;
}

export interface SidebarIconType {
  name: string;
  icon:React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
      >
    | string;
  link: string;
}
