import { FaInstagram, FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa"; // İkonları içe aktarın.
import Link from "next/link"; // Doğru şekilde içe aktarın.

const SocialMediaButtons = () => {
  const socialMediaLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/software_developer_tr",
      icon: <FaInstagram className="text-pink-500 mr-2" />,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@oguzhan_68",
      icon: <FaYoutube className="text-red-600 mr-2" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/oğuzhan-atilgan-036340237",
      icon: <FaLinkedin className="text-blue-700 mr-2" />,
    },
    {
      name: "E-posta",
      href: "mailto:oguzhanatilgan068@gmail.com",
      icon: <FaEnvelope className="text-gray-700 mr-2" />,
    },
  ];

  return (
    <div className="mt-4">
      <p className="text-gray-700 text-center  dark:text-gray-300">
        Sosyal Medya
      </p>
      <ul className="flex space-x-2 mt-2">
        {socialMediaLinks.map((link, index) => (
          <li key={index} className="flex items-center">
            {link.icon}
            <Link
              target="_blank"
              href={link.href}
              className="text-blue-700 hover:underline dark:text-blue-300"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaButtons;
