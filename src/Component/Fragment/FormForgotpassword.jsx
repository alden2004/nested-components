import Button from "../Element/Button";
import InputForm from "../Element/Input"

const FormForgotpassword = () => {
    return (
        <form action="" method="POST">
            <InputForm 
                label="New Password" 
                type="password" 
                placeholder="Enter your password" 
                name="password"
            />
            <InputForm 
                label="Confirm password" 
                type="password" 
                placeholder="Enter your password" 
                name="password"
            />

            <Button className="bg-blue-600 w-full" >Reset Password</Button>
        </form>
    );
};

export default FormForgotpassword;