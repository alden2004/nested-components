import Button from "../Element/Button";
import InputForm from "../Element/Input"

const FormLogin = () => {
    return (
        <form action="" method="POST">
            <InputForm 
                label="Email" 
                type="email" 
                placeholder="Enter your Email" 
                name="email"
            />
            <InputForm 
                label="Password" 
                type="password" 
                placeholder="Enter your password" 
                name="password"
            />
        
            <Button className="bg-blue-600 w-full">Login</Button>
        </form>
    );
};

export default FormLogin;