import { z } from 'zod';


//Esquema de validação do zod
export const usernameSchema = z.string()
.min(4, 'O nome de usuário ou e-mail deve ter no mínimo 4 caracteres')
.nonempty('Este campo é obrigatório')
export const passwordSchema = z.string()
  .min(3, 'A senha deve ter no mínimo 3 caracteres')
  .nonempty('Este campo é obrigatório')

  export const numberSchema = z.string()
  .regex(/^\d+$/, "Deve conter apenas números")
  .nonempty('Este campo é obrigatório')
