import Button from "../Component/Element/Button"
import CardProduct from "../Component/Fragment/CardProducts"

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5"> 
            <CardProduct>
                <CardProduct.Header image="/images/iphone-1.jpg"/>
                <CardProduct.Body title="Iphone 15 & Iphone 15 Pro">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Facere id non libero rerum quos laudantium? Accusantium
                    reprehenderit soluta provident incidunt id nam dolor hic 
                    deserunt consectetur esse, architecto at voluptatem.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp.12.000.000" />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/iphone-1.jpg"/>
                <CardProduct.Body title="Iphone 15 & Iphone 15 Pro">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Facere id non libero rerum quos laudantium? Accusantium
                    reprehenderit soluta provident incidunt id nam dolor hic 
                    deserunt consectetur esse, architecto at voluptatem.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp.12.000.000" />
            </CardProduct>
        </div>
    );
};

export default ProductsPage