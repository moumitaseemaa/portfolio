const ContactForm = () => {
  return (
    <div className="sm:w-[60%]">
      <h2 className="text-[17px] sm:text-lg font-bold mb-5.5 text-white/80">
        Send Your Message
      </h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="inputStyle" />
        <input type="email" placeholder="Email" className="inputStyle" />
        <input type="text" placeholder="Subject" className="inputStyle" />

        <textarea
          placeholder="Message"
          className="inputStyle text-white h-28 resize-none"
        ></textarea>
        <button
          type="submit"
          className="buttonStyle bg-violet-500 hover:bg-violet-600 border-transparent text-black "
        >
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
