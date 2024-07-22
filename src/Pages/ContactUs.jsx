import React from 'react';


const ContactUs = () => {
  return (
    <div className="h-screen flex flex-col pt-40 bg-CustomBlack-3 ">
      <h2 className="flex items-center justify-center text-6xl font-bold cursor-pointer">
        Contact Us
      </h2>
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg shadow-CustomYellow-1 mt-10 ">
        <p className="text-lg text-CustomYellow-2 leading-relaxed">
          <strong>Email:</strong> <a href="mailto:info@rhyno.in" className="text-CustomYellow-1">info@rhyno.in</a>
        </p>
        <p className="mt-4 text-lg text-CustomYellow-2 leading-relaxed">
          <strong>Mobile no.:</strong> <a href="tel:+919023987528" className="text-CustomYellow-1">+91-9023987528</a>
        </p>
        <p className="mt-4 text-lg text-CustomYellow-2 leading-relaxed">
          <strong>Location:</strong> Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU,
          Raisan, Gandhinagar, Gujarat, India.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
