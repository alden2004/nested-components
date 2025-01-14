 const Button = (props) => {
    const { children, classname = "bg-blue-600 w-50" } = props;
    return (
      <button
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white hover:bg-black`}
        type="submit"
      >
        {children}
      </button>
    );
  };
  
export default Button;