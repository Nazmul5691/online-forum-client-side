const Footer = () => {
  return (
    <footer className="footer px-10 py-20 bg-black text-white">
      <aside>
        <div className="flex">
          <img
            className="w-[45px] h-[45px] rounded-full mr-3"
            src="https://i.ibb.co/Gk5HP6m/logo.jpg"
            alt=""
          />
          <h1 className="font-bold text-blue-500 text-3xl mt-2">Talk Craft</h1>
        </div>
        <p className="ml-2">
          Engage Minds, Ignite Conversations, and <br /> Foster a Community of
          Knowledge.
        </p>
      </aside>
      <nav>
        <header className="footer-title">Forum Categories</header>
        <a href="/" className="link link-hover">
          General Discussions
        </a>
        <a href="/tags/technology" className="link link-hover">
          Technology
        </a>
        <a href="/tags/lifestyle" className="link link-hover">
          Lifestyle
        </a>
        <a href="/tags/arts" className="link link-hover">
          Arts & Culture
        </a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>

      <div>
        <h2>
          Copyright © 2023 Talk Craft. <br /> All rights reserved.
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
