import Button from "../Element/Button"

const CardProduct = (props) => {
    const {children} = props;
    return (
        <div className="w-full max-w-sm bg-slate-800 border border-slate-700 rounded-lg shadow mx-2">
            {children}
        </div>
    );
};

const Header = (props) => {
    const { image } = props;
    return(
        <a href="#">
            <img 
            src={image} 
            alt="products" 
            className="p-8 rounded-t-lg"
            />
        </a>
    );
};

const Body = (props) => {
    const { children, title } = props;
    return (
        <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl mb-2 font-bold tracking-tight text-white">
                        {title}
                    </h5>
                    <p className="text-s mb-2 text-white ">{children}</p>
             </a>
        </div>
    );
};

const Footer = (props) => {
    const { price } = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">{price}</span>
            <Button className="bg-blue-600 ">Add To Cart</Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;