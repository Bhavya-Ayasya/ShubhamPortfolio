const MaxWidthContainer = ({ children, className }) => {
  return (
    <section
      className={`${className ? className : ""} max-w-[1200px] w-full mx-auto max-md:px-4 md:px-10`}
    >
      {children}
    </section>
  );
};

export default MaxWidthContainer;
