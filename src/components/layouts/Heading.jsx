const Heading = ({ title, className }) => {
  return (
    <div
      className={`font-medium text-[30px] leding-1.2 before:absolute before:-translate-x-1/2 before:bottom-[-2px] before:w-50 before:h-1.5 before:bg-violet-500 z-1
      ${className}`}
    >
      {title}
    </div>
  );
};

export default Heading;
