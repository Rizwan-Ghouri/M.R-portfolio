import { useState } from "react";
import Swal from "sweetalert2";

function ContectUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      // WhatsApp number (country code ke saath, e.g., 923001234567)
      const phoneNumber = "923211628950";

      // WhatsApp message format
      const text = `Name: ${name}%0AContect-Number: ${number}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

      // WhatsApp API link
      const url = `https://wa.me/${phoneNumber}?text=${text}`;

      // Open WhatsApp link in new tab
      window.open(url, "_blank");
      Swal.fire({
        title: "Good job!",
        text: "sending",
        icon: "success",
        confirmButtonText: "Ok",
      });
      setName("");
      setEmail("");
      setNumber("");
      setSubject("");
      setMessage("");
    } else {
      Swal.fire({
        title: "Error!",
        text: "PLease input filled",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <div
      id="contect"
      className="bg-textcolor text-darkcolor dark:bg-darkcolor dark:text-textcolor min-h-screen flex items-center pt-10"
    >
      <div data-aos="zoom-in"
            data-aos-duration="1500" className="container page-center flex justify-center p-5">
        <div className="w-full max-w-xl text-darkcolor dark:text-textcolor dark:shadow-textcolor shadow-darkcolor shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Me!</h2>
          <form className="space-y-4">
            <div className="md:flex gap-3">
              <div className="w-full py-2">
                <label className="block mb-1 font-medium">Name</label>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border-b-2 border-l-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full py-2">
                <label className="block mb-1 font-medium">Contect Number</label>
                <input
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  type="number"
                  placeholder="Your Contect Number"
                  className="w-full px-4 py-2 border-b-2 border-l-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
              </div>
            </div>
            <div className="md:flex gap-3">
              <div className="w-full py-2">
                <label className="block mb-1 font-medium">Email</label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border-b-2 border-l-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
              </div>
              <div className="w-full py-2">
                <label className="block mb-1 font-medium">Subject</label>
                <input
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border-b-2 border-l-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border-b-2 border-l-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default ContectUs;
