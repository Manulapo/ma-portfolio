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
  tools: ToolsUsedInterface[];
  attachments: AttachmentInterface[];
  relevantLink?: string;
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
  icon:
    | React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
      >
    | string;
  link: string;
}

export type tailwindAnimations =
  | "hover:animate-pulse"
  | "animate-pulse"
  | "animate-bounce"
  | "animate-spin"
  | "animate-ping"
  | "animate-none";


  export type tailwindCsstextColor = 
  | "text-amber-400"
  | "text-blue-400"
  | "text-red-400"
  | "text-green-400"
  | "text-yellow-400"
  | "text-purple-400"
  | "text-pink-400"
  | "text-gray-400"
  | "text-black"
  | "text-white"
  | "text-slate-400"
  | "text-rose-400"
  | "text-violet-400"
  | "text-indigo-400"
  | "text-teal-400"
  | "text-lime-400"
  | "text-emerald-400"
  | "text-cyan-400"
  | "text-sky-400"
  | "text-fuchsia-400"
  | "text-amber-500"
  | "text-blue-500"
  | "text-red-500"
  | "text-green-500"
  | "text-yellow-500"
  | "text-purple-500"
  | "text-pink-500"
  | "text-gray-500"
