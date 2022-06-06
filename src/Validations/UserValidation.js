
import * as yup from 'yup';

export const userValidation = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.number().required().max(4, 'password should not exceed 4 digits'),
})