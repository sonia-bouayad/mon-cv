import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "98d3964b-d037-49d9-8c7b-b23f4430d862");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message Sent Successfully",
        icon: "success",
      });

      // Reset the form
      event.target.reset();
    } else {
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div
        id="contact"
        className="max-w-lg mx-3 sm:mx-auto flex flex-col pt-4 mt-10 justify-evenly items-center "
      >
        <div
          className="flex flex-col items-center my-20"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h3 className="text-white text-sm sm:text-lg">Feel Free To</h3>
          <h1 className="text-secondary text-2xl sm:text-5xl">Contact Me</h1>
        </div>

        <div
          className="flex flex-col w-full gap-6 border-[2px] border-secondary rounded-xl p-10"
          data-aos="flip-up"
          data-aos-duration="1200"
        >
          <h1 className="text-secondary text-3xl text-center mb-5">
            Formulaire
          </h1>
          <form
            className="m-auto flex flex-col gap-10 w-full"
            onSubmit={onSubmit}
          >
            {/* Name */}
            <div>
              <label
                className="font-semibold text-md text-slate-300 mb-2 block"
                htmlFor="name"
              >
                Nom
              </label>
              <input
                placeholder="ton nom"
                type="text"
                name="name"
                required
                className="bg-primary border-[2px] border-secondary rounded-xl py-2 px-4 w-full focus:border-white outline-none text-slate-300"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="font-semibold text-md text-slate-300 mb-2 block"
                htmlFor="email"
              >
                Email
              </label>
              <input
                placeholder="example@gmail.com"
                type="email"
                name="email"
                className="bg-primary border-[2px] border-secondary rounded-xl py-2 px-4 w-full focus:border-white outline-none text-slate-300"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                className="font-semibold text-md text-slate-300 mb-2 block"
                htmlFor="message"
              >
                Ton message
              </label>
              <textarea
                rows="4"
                placeholder="...."
                name="message"
                className="bg-primary border-[2px] border-secondary rounded-xl py-2 px-4 w-full focus:border-white outline-none text-slate-300"
                required
              ></textarea>

              <div
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-duration="400"
              >
                <button
                  type="submit"
                  className="bg-secondary text-sm md:text-lg text-gray-800 px-4 py-2 rounded hover:px-5 hover:py-2 transition-all duration-300 ease-in-out cursor-pointer mt-2"
                >
                  Valider
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
