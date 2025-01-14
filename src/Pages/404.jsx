import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-9xl font-black"><b>404</b></h1>
            <h1 className="text-3xl font-bold text-red-600"><b>Oops! Error</b></h1>
            <p className="my-5 text-2xl font-semibold">Maaf, Halaman ini tidak ditemukan!</p>
            <p className="font-bold text-2xl mt-1">{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;