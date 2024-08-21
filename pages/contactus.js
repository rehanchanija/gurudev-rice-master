import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  // const submitForm = async (values) => {
  //   const form = document.getElementById("my_form");

  //   values.preventDefault();
  //   console.log(values.target.name.value);
  //   console.log(values.target.email.value);
  //   console.log(values.target.description.value);

  //   setLoading(true);
  //   try {
  //     const res = await fetch("/api/addContactForm", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: values.target.name.value,
  //         email: values.target.email.value,
  //         description: values.target.description.value,
  //       }),
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //     setLoading(false);
  //     if (data) {
  //       toast.success("Contact Request Sent Sucessfully", {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //       form.reset();
  //       sendEmail(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  // const sendEmail = (result) => {
  //   console.log(result);
  //   var templatePrams = {
  //     to_email: result.contactForm.email,
  //     to_name: result.contactForm.name,
  //     content:
  //       "Your Contact request has been Sucessfully registered, we will reach you shortly",
  //   };
  //   emailjs
  //     .send(
  //       "service_3xmn5m5",
  //       "template_gd6ue8r",
  //       templatePrams,
  //       "92KOWZ7dxwyyy1cKk"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result, "success");
  //       },
  //       (error) => {
  //         console.log(error, "error");
  //       }
  //     );
  // };

  return (
    <div>
      {/* <Breadcrum l1="/" l2="/contact" h1="Home" h2="Contact Us" /> */}

      <div className="mx-auto lg:container  lg:px-0 px-4 ">
        <h1 className="xl:text-4xl text-3xl  font-semibold text-center pt-5 text-primary">
          Contact Us
        </h1>
        <h2 className="text-center pt-3">+91- 9407611000, +91-9669412000</h2>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder={0}
                title="map"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.4667445641117!2d81.05612541493372!3d21.093950185963052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a29451ee8ccc0c9%3A0x235109022e8bed04!2sSUNCITY%20JUNCTION!5e0!3m2!1sen!2sin!4v1668432412909!5m2!1sen!2sin"
              />

              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Head Office: Suncity Junction, Rajnandgaon, Chhattisgarh,
                    INDIA
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-500 leading-relaxed">
                    support@gurudevrice.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">
                    +91- 9407611000 <br /> +91-9669412000
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Drop Us A Line
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Contact us for any questions or concerns.
              </p>
              <form method="post" id="my_form">
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="description"
                    required
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="px-7 py-2 font-medium   hover:shadow-2xl shadow-primary  bg-primary text-white border border-primary rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
