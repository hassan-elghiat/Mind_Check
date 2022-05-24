const Footer = () => {
  return (
    <footer className="w-screen bg-teal-800">
      <div className="py-6 px-4 bg-teal-800 text-center">
        <span className="text-sm text-gray-300 text-center">
          © {new Date().getFullYear()}{" "}
          <span>Mind Check™</span>. All Rights
          Reserved.
        </span>
   
      </div>
    </footer>
  );
};

export default Footer;
