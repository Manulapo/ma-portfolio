const Heading = ({
  title,
  description,
  isMain = false,
}: {
  title?: string;
  description?: string;
  isMain?: boolean;
}) => {
  return (
    <header className="px-4 mb-6">
      {title ? (
        isMain ? (
          <h1 className="text-3xl">{title}</h1>
        ) : (
          <h2 className="text-3xl">{title}</h2>
        )
      ) : null}
      {description && <p className="text-muted-foreground mt-2">{description}</p>}
    </header>
  );
};

export default Heading;
