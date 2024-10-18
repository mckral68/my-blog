import SocialMediaButons from "./SocialMediaButons";
const Footer = () => {
  return (
    <footer className="py-6 mt-10 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center">
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
