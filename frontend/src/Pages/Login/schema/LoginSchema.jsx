import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Email or Username is required'),
  password: Yup.string()
    .required('Password is required'),
});

const ResetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export { LoginSchema, ResetPasswordSchema };
