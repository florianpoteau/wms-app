import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { loginSchema, type loginFormData } from "../../forms/login.schema";
import { ErrorMessage } from "@hookform/error-message"

const Login = () => {

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

export default Login;

