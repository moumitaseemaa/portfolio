import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfoLink = () => {
  const locationUrl = "https://maps.app.goo.gl/9bKNc7C1Hvp8dVcW9";
  const phoneNumber = "+11012345678"; // for international format
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`; //dynamic WhatsApp chat link
  const email = "moumitaaseema@gmail.com";

  return (
    <div className="space-y-6 w-full sm:w-[40%] mt-6 sm:mt-0">
      <h2 className="text-[17px] sm:text-lg font-bold text-white/80">
        Contact Info.
      </h2>

      <Link
        to={locationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:p-6 p-3 linkStyle"
      >
        <div className="flex items-center sm:space-x-6 space-x-3">
          <span className="text-2xl contactMedia">
            <FaLocationDot />
          </span>
          <p className="text-[13px] sm:text-base font-medium">
            <span className="block">Location</span>
            <span>Dhaka, Bangladesh</span>
          </p>
        </div>
      </Link>

      <Link
        to={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:p-6 p-5 linkStyle"
      >
        <div className="flex items-center sm:space-x-6 space-x-3">
          <span className="text-2xl contactMedia">
            <FaWhatsapp />
          </span>
          <p className="text-[13px] sm:text-base font-medium">
            <span className="block">WhatsApp</span>
            <span>+8801977703616</span>
          </p>
        </div>
      </Link>

      <Link to={`mailto:${email}`} className="sm:p-6 p-3 linkStyle">
        <div className="flex items-center sm:space-x-6 space-x-3">
          <span className="text-2xl contactMedia">
            <MdEmail />
          </span>
          <p className="text-[13px] sm:text-base font-medium">
            <span className="block">Email</span>
            <span className="break-all sm:break-normal">
              moumitaaseema@gmail.com
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ContactInfoLink;
