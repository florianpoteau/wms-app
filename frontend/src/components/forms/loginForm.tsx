import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, type loginFormData } from "../../forms/login.schema";
import { useLogin } from "../../hooks/useLogin";
import Input from "../inputs/input";

const LoginForm = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<loginFormData>({
        resolver: zodResolver(loginSchema),
    })

    const { login, isPending, data } = useLogin()

    return (
        <form onSubmit={handleSubmit((data: loginFormData) => login(data))} className="">
            <div className="flex w-full flex-col gap-6">

                <Input
                    label="Adresse mail"
                    type="email"
                    placeholder="Votre adresse mail"
                    {...register("email")}
                    error={errors.email?.message}
                />
                <br />
                <Input
                    label="Mot de passe"
                    type="password"
                    placeholder="Votre mot de passe"
                    {...register("password")}
                    error={errors.password?.message}
                />

                <br />

                <button type="submit" disabled={isPending}>
                    {isPending ? "Connexion..." : "Se connecter"}
                </button>
                <p>{data?.data.message}</p>

            </div>

        </form >
    )
}

export default LoginForm;