const SectionHeader = ({
  title,
  description,
  primaryText,
  secondaryText,
  containerClass = "text-center",
}) => {
  return (
    <div className={containerClass}>
      {title ? (
        <h2 className="text-3xl md:text-4xl text-primary font-bold ">
          {title}
        </h2>
      ) : (
        <h2 className="text-3xl md:text-4xl font-bold ">
          {secondaryText} <span className="text-primary">{primaryText}</span>
        </h2>
      )}
      <p className="text-gray-600 max-w-2xl mx-auto text-xl">{description}</p>
    </div>
  );
};

export default SectionHeader;
