import React from 'react'

const PaymentMethod = ({ value, onChange }) => {
  const paymentMethods = [
    {
      id: "cod",
      title: "Cash on Delivery",
      description: "Pay when your order arrives.",
    },
    {
      id: "card",
      title: "Credit / Debit Card",
      description: "Demo payment option.",
    },
    {
      id: "upi",
      title: "UPI",
      description: "Demo UPI payment option.",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
      <h2 className="text-xl font-bold mb-6">
        Payment Method
      </h2>

      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={`border rounded-xl flex items-start gap-4 cursor-pointer p-4 transition ${
              value === method.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value={method.id}
              checked={value === method.id}
              onChange={(event) =>
                onChange(event.target.value)
              }
              className="mt-1"
            />

            <div>
              <p className="font-semibold">
                {method.title}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {method.description}
              </p>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}

export default PaymentMethod