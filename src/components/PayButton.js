import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

function PayButton(props) {
  const config = {
    public_key: "FLWPUBK_TEST-5c61cc22eaf0a27c6d712b08a3326320-X",
    tx_ref: Date.now(),
    amount: 25,
    currency: "USD",
    payment_options: "card",
    customer: {
      email: "ajahkenneth2018@gmail.com",
      phonenumber: "09081106713",
      name: "Kenzmith",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <button
        className="pay-button"
        onClick={(e) => {
          e.preventDefault();
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              // if (response.status === "sucessfull") {
              //   alert("payment was sucessful");
              // }
              // closePaymentModal();
            },
            onClose: () => {},
          });
        }}
      >
        Join Us
      </button>
    </>
  );
}

export default PayButton;
