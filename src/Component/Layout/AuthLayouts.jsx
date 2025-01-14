import { Link } from "react-router-dom"

const AuthLayout = (props) => {
  const{children, title, type } = props;
    return(
      <div className="text-2xl flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
          <p className="font-medium text-slate-500 text-sm mb-8">
          Helloo gaess, silahkan masuk ke akun anda
          </p>
          {children}
          <p className="text-sm mt-2 text-center">
            {type === 'login'
              ? "Tidak punya akun? " 
              : "Sudah memiliki akun? "}

            {type === "login" && (
              <Link to="/register" className="font-bold text-blue-600">
                Daftar
              </Link>
            )}

            {(type === "register" || type === "reset password") && (
              <Link to="/login" className="font-bold text-blue-600">
                Login
              </Link>
            )}
            
          </p>
          
          <p className="text-sm mt-2 text-center">
            {type === "login" && (
              <Link to="/forgotpassword" className="font-bold text-blue-600">
                Lupa Password?
              </Link>
            )}
          
          </p>
        </div>
      </div> 
  );
};

export default AuthLayout;