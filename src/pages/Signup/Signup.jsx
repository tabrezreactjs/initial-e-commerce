import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useForm } from 'react-hook-form'
import AuthCard from '../../components/common/AuthCard/AuthCard'
import Input from '../../components/common/Input/Input'
import Button from '../../components/common/Button/Button'
import toast from 'react-hot-toast'

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    console.log(values);

    try {
      const userData = {
        ...values,
        avatar: "https://i.pravatar.cc/150",
      };

      await signup(userData);

      console.log("Signup Success");
      toast.success('Account created successfully!');

      console.log("Navigating to Login");
      navigate('/login');
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || 'Signup failed!'
      );
    }
  };

  return (
    <AuthCard
      title="Create Account"
      subtitle="Create your ShopX account."
    >
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <Input
          id="name"
          label="Name"
          placeholder="Full name"
          error={errors.name?.message}
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Minimum 3 characters',
            },
          })}
        />

        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="Enter email"
          error={errors.email?.message}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          })}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter password"
          error={errors.password?.message}
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
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
          Create Account
        </Button>
      </form>

      <p className="text-center mt-6">
        Already have an account?
        <Link
          to="/login"
          className="text-blue-600 font-semibold ml-2"
        >
          Login
        </Link>
      </p>
    </AuthCard>
  )
}

export default Signup