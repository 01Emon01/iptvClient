export const metadata = {
  title: "Refund Policy",
  description: "Refund Policy of UAE IPTV BOX",
};

export default async function page() {
  return (
    <main className="container mx-auto px-4 md:px-10 xl:px-15 py-12 text-gray-700">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

      <p className="mb-4">
        At <strong>UAE IPTV BOX</strong>, customer satisfaction is important to
        us. This Refund Policy outlines the conditions under which refunds may
        be granted.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        1. Physical Products (TV Boxes)
      </h2>
      <p className="mb-4">
        Refunds or replacements may be provided if the product has a verified
        defect or problem.
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          The issue must be reported within a reasonable time after delivery
        </li>
        <li>The product must not be physically damaged by misuse</li>
        <li>Proof of the problem may be required (photos/videos)</li>
      </ul>

      <p className="mb-4">
        Once the issue is reviewed, we may offer a replacement, repair, or
        refund at our discretion.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. Digital Services (IPTV Subscriptions)
      </h2>
      <p className="mb-4">
        Due to the nature of digital services, IPTV subscriptions are generally
        <strong> non-refundable once activated</strong>.
      </p>

      <p className="mb-4">Exceptions may be considered only if:</p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>The service cannot be activated</li>
        <li>A verified technical issue prevents usage</li>
      </ul>

      <p className="mb-4">
        Refund eligibility for digital services will be evaluated on a
        case-by-case basis.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Non-Refundable Situations
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Change of mind after purchase</li>
        <li>Compatibility issues not discussed before purchase</li>
        <li>User-side internet or ISP problems</li>
        <li>Incorrect installation or misuse</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Refund Process</h2>
      <p className="mb-4">
        To request a refund, please contact us via our official WhatsApp or
        email with details of your order and the issue encountered.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        5. Contact Information
      </h2>
      <p className="mb-2">
        WhatsApp: <strong>0502368942</strong>
      </p>
      <p>
        Email: <strong>uaeiptvbox@gmail.com</strong>
      </p>
    </main>
  );
}
