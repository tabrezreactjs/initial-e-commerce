import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../common/Input/Input'

const ShippingForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, } = useForm();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
      <h2 className="text-xl font-bold mb-6">
        Shipping Address
      </h2>

      <form
        id="shipping-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          
          {/* Full Name */}
          <Input
            id="fullName"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullName?.message}
            {...register("fullName", {
              required: "Full name is required",
            })}
          />

          {/* Phone */}
          <Input
            id="phone"
            label="Phone Number"
            placeholder="Enter phone number"
            error={errors.phone?.message}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10 digit phone number",
              },
            })}
          />

          {/* Email */}
          <div className="md:col-span-2">
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="Enter email"
              error={errors.email?.message}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <Input
              id="address"
              label="Address"
              placeholder="House number, street, area"
              error={errors.address?.message}
              {...register("address", {
                required: "Address is required",
              })}
            />
          </div>

          {/* City */}
          <Input
            id="city"
            label="City"
            placeholder="Enter city"
            error={errors.city?.message}
            {...register("city", {
              required: "City is required",
            })}
          />

          {/* State */}
          <Input
            id="state"
            label="State"
            placeholder="Enter state"
            error={errors.state?.message}
            {...register("state", {
              required: "State is required",
            })}
          />

          {/* Pincode */}
          <Input
            id="pincode"
            label="Pincode"
            placeholder="Enter pincode"
            error={errors.pincode?.message}
            {...register("pincode", {
              required: "Pincode is required",
              pattern: {
                value: /^[0-9]{6}$/,
                message: "Enter a valid 6 digit pincode",
              },
            })}
          />
        </div>
      </form>
    </div>
  )
}

export default ShippingForm