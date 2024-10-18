import SocialMediaButons from "./SocialMediaButons";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Oğuzhan Atılgan</h2>
          <p className="text-sm">Tüm Hakları Saklıdır © 2024</p>
        </div>
        <div className="flex space-x-4">
          <SocialMediaButons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
