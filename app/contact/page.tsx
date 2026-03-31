import ContactForm from "@/components/contact/ContactForm";

export default async function Contact() {
  return (
    <div className="xz-content-wrapper py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-center text-2xl md:text-4xl font-semibold mb-2">
            Contact US
          </h1>
          <span className="text-center">
            Please use the below form. You can also call customer service on +1
            (973) 435-3638.
          </span>
        </div>
        <div className="dragon-map w-full mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.8198201489454!2d55.409832875174885!3d25.175561077724804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f614952f915f9%3A0xc406c97713611a9!2sDragon%20Mart%20by%20Dubai%20Retail!5e0!3m2!1sen!2sau!4v1774952077690!5m2!1sen!2sau"
            width={"100%"}
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-form">
          <div className="contact-header mb-5">
            <p>
              Please submit all general enquiries in the contact form below and
              we look forward to hearing from you soon.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
