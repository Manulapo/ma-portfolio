import { cn } from "../../lib/utils";

const Project2 = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-8 p-4 text-gray-800", className)}>
      {/* Two Column Section */}
      <div className="gap-6 items-center">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold w-full">
            Project Overview
          </h3>
          <p>
            This project showcases a modern, responsive design built with React and Tailwind CSS. It focuses on clean layouts, dynamic content, and user-friendly interfaces.
          </p>
          <h3 className="text-xl font-semibold">Key Features</h3>
          <p>
            - Fully responsive design<br />
            - Optimized for performance<br />
            - Modular and reusable components
          </p>
          <h3 className="text-xl font-semibold">Technologies Used</h3>
          <p>
            React, Tailwind CSS, TypeScript, and more.
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>Custom animations and transitions</li>
            <li>Interactive UI elements</li>
            <li>Seamless integration with APIs</li>
          </ul>
        </div>
      </div>

      {/* Image Gallery */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <img
              key={i}
              src={`https://source.unsplash.com/random/300x200?tech&sig=${i}`}
              alt={`Gallery ${i}`}
              className="rounded-lg object-cover w-full h-40"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project2;