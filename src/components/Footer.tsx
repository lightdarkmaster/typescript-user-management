function Footer() {
  return (
    <footer className="w-full h-fit bg-[#2469c3]  text-white py-1">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Contact Me</h2>
          <p>Email: christian.barbosa05222001@gmail.com</p>
          <p>Phone: +123 456 78910 (Secret 🤫)</p>
        </div>

        <div className="text-center mt-4 md:mt-0">
          <p>
            &copy; {new Date().getFullYear()} Christian Barbosa. All Rights
            Reserved.
          </p>
        </div>

        <div className="text-center mt-4 md:mt-0 flex flex-col">
          <h2 className="text-xl font-semibold">Follow Me</h2>
          <a
            href="https://github.com/lightdarkmaster"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            GitHub: lightdarkmaster
          </a>
          <a
            href="https://www.facebook.com/ChanNotDiff/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            Facebook: Christian Barbosa
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
