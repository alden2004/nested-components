import AuthLayout from "../Component/Layout/AuthLayouts";
import FormForgotpassword from "../Component/Fragment/FormForgotpassword";

const ForgotpasswordPage = () => {
  return (
    <AuthLayout title="Reset Password" type="reset password">
      <FormForgotpassword/>
    </AuthLayout>
  
  );
};

export default ForgotpasswordPage;