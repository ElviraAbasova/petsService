import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Email or Username is required'),
  password: Yup.string()
    .required('Password is required'),
});

export default LoginSchema;
