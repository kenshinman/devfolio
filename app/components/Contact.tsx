import {assets} from "@/app/assets/assets";
import Image from "next/image";
import React, {useState, FormEvent} from "react";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({isDarkMode}) => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB_3_FORM_ACCESS_KEY || ""
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      className='w-full px-[12%] py-10 scroll-mt-20 
        bg-[url("/footer-bg-color.png")] bg-no-repeat bg-[length:90%_auto] dark:bg-none'
      id="contact"
    >
      <h4 className="text-center mb-2 text-lg">Connect with me</h4>
      <h2 className="text-center  text-5xl">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I&apos;d love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your Name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your Email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="email"
          />
        </div>

        <textarea
          rows={6}
          placeholder="Enter your Message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          name="message"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Send Message
          <Image
            src={assets.right_arrow_white}
            alt="right arrow "
            className="w-4"
          />
        </button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
