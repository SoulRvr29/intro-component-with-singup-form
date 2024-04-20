const Footer = () => {
  return (
    <footer className=" mx-auto w-full left-0 bottom-0 text-center font-bold text-base text-white p-4 max-lg:p-4 max-lg:text-xs bg-Very-light-gray border-t-2  place-self-end">
      Challenge by
      <a
        className="text-white ml-1 hover:text-accentBlue hover:underline"
        href="https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        className="text-white ml-1 hover:text-accentBlue hover:underline"
        href="https://www.frontendmentor.io/profile/SoulRvr29"
        target="_blank"
      >
        Paweł Chudecki
      </a>
      .
    </footer>
  );
};

export default Footer;
