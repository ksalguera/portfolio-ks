const Button = ({ id, text, className }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault(); 

        const target = document.getElementById("counter"); 

        if (target && id) {
          const offset = window.innerHeight * 0.15; 

          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} relative`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/hero/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </button>
  );
};

export default Button;