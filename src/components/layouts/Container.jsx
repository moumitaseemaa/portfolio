const Container = ({ className, children }) => {
  return (
    <div className={`w-full max-w-[1140px] mx-auto ${className}`}>{children}</div>
  );
};

export default Container;



