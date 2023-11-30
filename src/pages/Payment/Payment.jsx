import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center my-10">Make a payment </h2>
            <div>
                <Elements stripe={stripePromise}>
                    <div className="w-7/12 mx-auto">
                        <CheckoutForm></CheckoutForm>
                    </div>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;