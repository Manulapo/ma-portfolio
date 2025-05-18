import React from "react";
import Heading from "./heading";

const Section = ({
  title,
  description,
  isMain = false,
  children,
}: {
  title?: string;
  description?: string;
  isMain?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className="my-6 mb-20">
      {title || description ? (
        <Heading
          title={title ?? undefined}
          description={description ?? undefined}
          isMain={isMain ?? false}
        />
      ) : null}
      <div className="w-100vw">{children}</div>
    </div>
  );
};

export default Section;
