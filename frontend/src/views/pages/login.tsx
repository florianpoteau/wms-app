import LoginForm from "../../components/forms/loginForm";

const Login = () => {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center">
            <h1 className="text-red-800 text-4xl mb-12 font-bold">Connexion</h1>
            <LoginForm />
        </main>
    )
}

export default Login;

