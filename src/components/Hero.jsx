import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="summarizer_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        I really didn't feal like putting the product speak from the tutorial
        here because it seemed too cringy. In short, this application takes in a
        link to an article and summarizes it using GPT-4.
      </h2>
    </header>
  );
};

export default Hero;
