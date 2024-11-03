const ContactPage = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-lg mx-auto text-center mt-12">
      <h1 className="text-3xl font-semibold mb-14">Kontaktujte nás</h1>
      <p className="text-lg font-medium mb-4">Máte dotaz? Rádi vám pomůžeme!</p>

      <div className="text-gray-700 mb-6">
        <p className="text-lg">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@realitni-leady.com"
            className="text-blue-500 hover:underline"
          >
            info@realitni-leady.com
          </a>
        </p>
        <p className="text-lg mt-2">
          <strong>Telefon:</strong>{" "}
          <a href="tel:+420123456789" className="text-blue-500 hover:underline">
            +420 734 597 626
          </a>
        </p>
      </div>

      <p className="text-gray-500 text-sm">
        Jsme vám k dispozici od pondělí do pátku, 9:00 - 17:00.
      </p>
    </div>
  );
};

export default ContactPage;
