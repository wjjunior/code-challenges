import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validation/schema";
import type { FormData } from "../types/FormData";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados do formulário:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          {...register("name")}
          aria-invalid={!!errors.name}
        />
        {errors.name && <span role="alert">{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="phone">Telefone</label>
        <input
          id="phone"
          type="text"
          placeholder="(99) 99999-9999"
          {...register("phone")}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <span role="alert">{errors.phone.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          {...register("password")}
          aria-invalid={!!errors.password}
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          aria-invalid={!!errors.confirmPassword}
        />
        {errors.confirmPassword && (
          <span role="alert">{errors.confirmPassword.message}</span>
        )}
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
}
