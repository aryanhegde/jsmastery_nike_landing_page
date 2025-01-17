import { copyrightSign } from "../assets/icons";
import { footerLogo, logoTransparent2 } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="justify-between flex items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={logoTransparent2} alt="Logo" width={178} height={46} />
          </a>
          <p className="mt-6 text-white-400 text-base font-montserrat sm:max-w-sm">
            Crafting Healthy, Beautiful Smiles: Experience Excellence in
            Dentistry at Sumukha Dentals
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} height={24} width={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 font-montserrat text-white-400 text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-center gap-2 font-montserrat cursor-pointer ">
          <img
            src={copyrightSign}
            alt="Copyright"
            height={20}
            width={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
