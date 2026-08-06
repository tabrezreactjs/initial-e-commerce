import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useForm } from 'react-hook-form'
import AuthCard from '../../components/common/AuthCard/AuthCard'
import Input from '../../components/common/Input/Input'
import Button from '../../components/common/Button/Button'
import toast from 'react-hot-toast'

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    console.log(values);

    try {
      await login(values.email, values.password);

      console.log("Login Success");
      toast.success('Login Successful!');

      console.log("Navigating to Home");
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || 'Login Failed!'
      );
    }
  }

  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Login to continue shopping."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Enter email"
          error={errors.error?.message}
          {...register('email', {
            required: 'Email is required',
          })}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter password"
          error={errors.error?.message}
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value: /^[A-Za-z0-9]+$/,
              message: "Password can contain only letters and numbers",
            },
          })}
        />

        <Button 
          type='submit'
          fullWidth
          loading={isSubmitting}
        >
          Login
        </Button>
      </form>

      <p className="text-center mt-6">
        Don't have an account?
        <Link
          className="text-blue-600 font-semibold ml-2"
          to="/signup"
        >
          Signup
        </Link>
      </p>
    </AuthCard>
  )
}

export default Login