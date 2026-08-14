import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema, type loginFormData } from "../forms/login.schema";

const LoginForm = () => {
    const [data, setData] = useState("");

    const { register, formState: { errors }, handleSubmit } = useForm<loginFormData>({
        resolver: zodResolver(loginSchema),
    })

    return (
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            <input {...register("email")} placeholder="Votre adresse mail" type="email" />
            <ErrorMessage errors={errors} name={"email"} />
            <p>{ }</p>
            <input {...register("password")} placeholder="Votre mot de passe" type="password" />
            <ErrorMessage errors={errors} name={"password"} />
            <p>{data}</p>
            <input type="submit" value="Se connecter" />

        </form>
    )
}

export default LoginForm;