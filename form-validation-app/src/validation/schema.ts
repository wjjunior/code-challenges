import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("O nome é obrigatório."),
  email: yup
    .string()
    .email("Email inválido")
    .required("O email é obrigatório."),
  phone: yup
    .string()
    .matches(/^\(\d{2}\)\s?\d{4,5}-\d{4}$/, "Formato válido: (99) 99999-9999")
    .required("O telefone é obrigatório."),
  password: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .required("A senha é obrigatória."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não conferem")
    .required("A confirmação é obrigatória."),
});
