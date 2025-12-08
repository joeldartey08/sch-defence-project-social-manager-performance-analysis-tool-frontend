import { formatDate } from "../utils/useDateFormatter";

const Privacy = () => {
  const date = new Date("2025-12-15");

  const terms = [
    {
      sectionTitle: "Privacy Policy Overview",
      details: [
        "Femirae Essence is committed to protecting the privacy and security of our customers' personal information. This policy describes how we collect, use, and share your data when you visit or make a purchase from femirae-luxe.vercel.app.",
      ],
    },
    {
      sectionTitle: "1. Information We Collect",
      details: [
        "We collect various types of information to process orders and improve your experience:",
        "Personal Information: Name, billing address, shipping address, email address, and phone number when you make a purchase or register an account.",
        "Payment Information: We do not store full credit card details. Payment information is securely processed by our third-party payment processors.",
        "Usage Data: Information about how you access and use the site, including IP address, browser type, pages viewed, and time spent on pages.",
      ],
    },
    {
      sectionTitle: "2. How We Use Your Information",
      details: [
        "We use your information for essential business purposes:",
        "To process and fulfill your orders and manage returns/exchanges.",
        "To communicate with you regarding your order status (via email or WhatsApp, as noted in our T&Cs).",
        "To provide customer support and respond to inquiries.",
        "To improve our website functionality and user experience.",
        "For marketing purposes (only with your explicit consent).",
      ],
    },
    {
      sectionTitle: "3. Sharing Your Personal Information",
      details: [
        "We do not sell your personal data. We only share it with trusted third parties necessary to run our business:",
        "Service Providers: Couriers (for delivery), payment processors (for secure transactions), and IT services.",
        "Legal Compliance: When required by law or to protect our rights, privacy, safety, or property.",
      ],
    },
    {
      sectionTitle: "4. Data Security & Retention",
      details: [
        "We implement robust security measures to protect your data (e.g., encryption, secure servers).",
        "We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.",
      ],
    },
    {
      sectionTitle: "5. Your Rights (GDPR & CCPA Compliant Statement)",
      details: [
        "Depending on your location, you may have rights concerning your personal data, including the right to access, correct, delete, or limit our use of your information.",
        "To exercise these rights, please contact us using the details below.",
      ],
    },
    {
      sectionTitle: "6. Changes to This Policy",
      details: [
        "We may update this Privacy Policy occasionally to reflect changes to our practices or for legal reasons. The updated version will be posted on this page with the effective date.",
      ],
    },
    {
      sectionTitle: "7. Contact Us",
      details: [
        "For more information about our privacy practices, if you have questions, or to make a complaint, please contact us by email at [Your Email Address], by WhatsApp, or through our business line.",
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
            transparency. By using our website, you consent to the data
            practices described in this privacy policy
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
            We hope this privacy policy provides you with a clear understanding
            of how your information is handled. Your trust is important to us,
            and we are committed to protecting your privacy with care and
            diligence. Thank you for your continued support.
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
