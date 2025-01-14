import Button from "../Element/Button";
import InputForm from "../Element/Input"

const FormRegister = () => {
    return (
        <form action="" method="POST">
            <InputForm 
                label="Fullname" 
                type="text" 
                placeholder="Insert your name here..." 
                name="fullname"
            />
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
            <InputForm 
                label="Confirm Password" 
                type="password" 
                placeholder="....." 
                name="confirmPassword"
            />
            <Button className="bg-blue-600 w-full">Register</Button>
        </form>
    );
};

export default FormRegister