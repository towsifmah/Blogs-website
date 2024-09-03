import React from "react";
const contactimg = "./src/assets/contact.png";
const ContactForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10">
      <div>
        <img src={contactimg} alt="" />
      </div>
      <form>
        <div className="mb-2">
          <label className="block mb-1 font-poppins text-black text-base font-medium" htmlFor="name">Name</label>
          <input className="w-full p-2 bg-gray-200 border border-gray-200 outline-none rounded font-poppins placeholder:font-poppins" type="name" name="name" id="name" placeholder="Your Name" />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-poppins text-black text-base font-medium" htmlFor="email">Email Address</label>
          <input className="w-full p-2 bg-gray-200 border border-gray-200 outline-none rounded font-poppins placeholder:font-poppins" type="email" name="email" id="email" placeholder="exmpolof@gmail.com" />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-poppins text-black text-base font-medium" htmlFor="subject">Subject</label>
          <input className="w-full p-2 bg-gray-200 border border-gray-200 outline-none rounded font-poppins placeholder:font-poppins" type="email" name="email" id="email" placeholder="Your Subject" />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-poppins text-black text-base font-medium" htmlFor="message">Message</label>
          <textarea  className="w-full p-2 h-full bg-gray-200 border border-gray-200 outline-none rounded font-poppins placeholder:font-poppins" type="message" name="message" id="message" placeholder="Type your Message" />
        </div>
        <button type="submit" className="py-2 px-5 bg-green-500 text-white rounded hover:bg-green-600 duration-300 font-poppins font-medium">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
