import { formatDate } from "../utils/useDateFormatter";

const Terms = () => {
  const date = new Date("2025-12-15");

  const terms = [
    {
      sectionTitle: "1. Placing Orders",
      details: [
        "Orders can be placed via our official Instagram, WhatsApp, business line, or directly through our website (femirae-luxe.vercel.app).",
        "Please provide full item details (item, color, size, delivery address).",
        "Website Orders: After submitting your order via the website cart, we will contact you via your provided email address or WhatsApp number to finalize payment details and confirm your purchase.",
        "Orders are confirmed only after full payment is received (a deposit may apply where stated).",
      ],
    },
    {
      sectionTitle: "2. Payment Terms",
      details: [
        "Full payment is required before processing and shipping your order.",
        "Payments must be completed via the secure methods communicated to you by our team through official channels (email/WhatsApp) after your website order is placed, or directly via our official business account for manual orders.",
        "Our prices reflect premium quality; however, slight negotiations may be considered depending on the order size.",
      ],
    },
    {
      sectionTitle: "3. Order Confirmation",
      details: [
        "Once your payment is received and verified, a formal confirmation message will be sent to you.",
        "Kindly review all order details carefully before final confirmation to ensure accuracy.",
      ],
    },
    {
      sectionTitle: "4. Cancellations",
      details: [
        "Once an order is confirmed and payment is processed, it cannot be cancelled.",
        "Deposits made for custom or reserved items are strictly non-refundable.",
      ],
    },
    {
      sectionTitle: "5. Refunds & Exchanges",
      details: [
        "Refunds are applicable only if a wrong or damaged item (caused directly by us or a verifiable manufacturing fault) is delivered.",
        "Exchanges may be possible depending solely on current stock availability and condition of the returned item.",
      ],
    },
    {
      sectionTitle: "6. Delivery",
      details: [
        "Delivery timelines vary by your specific location and are estimates provided by the courier service.",
        "Delivery fees apply to all orders and are the client’s financial responsibility.",
        "While we are not liable for delays caused by third-party couriers, we will assist you promptly with tracking and logistics support.",
      ],
    },
    {
      sectionTitle: "7. Customer Responsibility",
      details: [
        "It is the customer's responsibility to:",
        "Provide accurate order and delivery details during the checkout process.",
        "Ensure availability to receive your package upon delivery attempts.",
        "Handle all luxury pieces with the same exceptional care with which they are delivered.",
      ],
    },
  ];

  return (
    <>
      <div className="w-full flex mb-10 items-center flex-col">
        <p className="text-center my-2 text-white bg-gray-500 p-2 rounded-3xl">
          last updated- {formatDate(`${date}`)}
        </p>

        <div className="max-w-5xl w-[95%] mb-10 mx-auto">
          <p className="text-center mb-10">
            Navigating the Femirae Essence experience with clarity, trust, and
            transparency. By placing an order with Femirae Essence, you agree to
            the following terms and conditions:
          </p>

          <div className="w-full grid gap-8">
            {terms.map((value, index) => (
              <div
                className="p-5 flex flex-col items-center gap-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5"
                key={index}
              >
                <h1 className="text-lg">{value.sectionTitle}</h1>
                <p className="text-sm">{value.details}</p>
              </div>
            ))}
          </div>
           <p className="text-center my-10">
           At Femirae Luxe, every order is handled with precision and elegance. Thank you for choosing us.
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;
