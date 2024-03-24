import { footerLinks } from "@/data";
import footerLogo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#24242c] rounded-tr-[120px] py-[60px] px-[140px]">
      <div className="grid grid-cols-1 gap-[60px] md:grid-cols-2 md:gap-[60px] xl:grid-cols-4 text-center md:text-left">
        <div className="flex justify-center md:justify-start">
          <img
            src={footerLogo}
            alt="footer logo"
            className="w-[120px] h-[50px]"
          />
        </div>
        {footerLinks.map((link) => (
          <div key={link.id}>
            <h3 className="text-white font-semibold mb-3 lg:mb-8">
              {link.title}
            </h3>
            {link.subLinks.map((subLink) => (
              <p className="text-[#cacad2] leading-[38px]">{subLink}</p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
