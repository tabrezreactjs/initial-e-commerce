import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ShippingForm from "../../components/checkout/ShippingForm/ShippingForm";
import PaymentMethod from "../../components/checkout/PaymentMethod/PaymentMethod";
import CheckoutSummary from "../../components/checkout/CheckoutSummary/CheckoutSummary";
import Button from "../../components/common/Button/Button";
import { FiArrowLeft, FiCheck, FiCheckCircle, FiLock } from "react-icons/fi";
import toast from "react-hot-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [shippingData, setShippingData] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [placingOrder, setPlacingOrder] = useState(false);

  // Prevent checkout with empty cart
  if (!cart.length) {
    return (
      <section className="min-h-dvh bg-gray-50 py-16">
        <div className="max-w-2xl text-center px-6 mx-auto">
          <h1 className="text-3xl font-bold">
            Your cart is empty
          </h1>

          <p className="text-gray-500 mt-3">
            Add some products before proceeding to checkout.
          </p>

          <Button
            className="mt-6"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </Button>
        </div>
      </section>
    );
  }

  const handleShippingSubmit = (data) => {
    setShippingData(data);
  };

  const handlePlaceOrder = async () => {
    if (!shippingData) {
      toast.error(
        "Please complete your shipping address."
      );

      return;
    }

    if (!paymentMethod) {
      toast.error(
        "Please select a payment method."
      );

      return;
    }

    try {
      setPlacingOrder(true);

      // Demo order processing
      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      clearCart();

      toast.success(
        "Order placed successfully!"
      );

      navigate("/order-success");
    } catch (error) {
      toast.error(
        "Unable to place order."
      );
    } finally {
      setPlacingOrder(false);
    }
  };

  return (
    <div className="w-full max-w-7xl pb-10 pt-4 px-4 mx-auto md:px-6 lg:px-8">
      <div className="flex flex-col gap-4 mb-8 sm:justify-between sm:items-center sm:flex-row">
        <div className='flex flex-col gap-1'>
          <h1 className="text-3xl font-bold">
            Checkout
          </h1>

          <div className="text-gray-500 text-sm flex items-center gap-2">
            <FiLock size={15} />

            <span>
              Secure checkout
            </span>
          </div>
        </div>

        <Button
          variant="warning"
          size="sm"
          startIcon={<FiArrowLeft />}
          onClick={() => navigate("/cart")}
        >
          Back to Cart
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
          <ShippingForm
            onSubmit={handleShippingSubmit}
          />

          <PaymentMethod
            value={paymentMethod}
            onChange={setPaymentMethod}
          />

          {/* Shipping status */}
          {shippingData && (
            <div className="bg-green-50 border border-green-200 rounded-xl text-green-700 flex items-center gap-3 p-4">
              <FiCheck />

              <span className="text-sm font-medium">
                Shipping information completed.
              </span>
            </div>
          )}

          <div className="flex flex-col gap-2 xs:flex-row">
            <Button
              variant="warning"
              fullWidth
              startIcon={<FiArrowLeft />}
              onClick={() => navigate("/cart")}
            >
              Back to Cart
            </Button>

            <Button
              variant="success"
              fullWidth
              endIcon={<FiCheckCircle />}
              loading={placingOrder}
              onClick={handlePlaceOrder}
              disabled={placingOrder || cart.length === 0}
            >
              Place Order
            </Button>
          </div>
        </div>

        <div className="w-full lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <CheckoutSummary
              loading={placingOrder}
              onPlaceOrder={handlePlaceOrder}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout