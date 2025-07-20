function Footer() {
    return (
      <footer className="bg-gray-800 text-center text-gray-400 py-6 mt-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} Yuki. All Rights Reserved.
        </p>
        <p className="text-xs">
          Designed and Built with using
          React and Tailwind CSS.
        </p>
      </footer>
    );
  }
  
  export default Footer;