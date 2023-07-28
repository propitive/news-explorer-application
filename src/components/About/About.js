import selfieOfMe from "../../images/selfieOfMe.PNG";

function About() {
  return (
    <section className="about">
      <img
        className="about__picture"
        src={selfieOfMe}
        alt="Selfie of Jose Maldonado"
      />
      <div className="about__content">
        <p className="about__title">About the author</p>
        <p className="about__paragraphs">
          In a galaxy far far away... Just kidding, unfortunately, I am no Jedi!
          My name is Jose Maldonado, I am an aspiring software engineer
          currently working in the IT industry. <br></br> <br></br>I am
          confident with HTML, CSS, JavaScript, Git, Figma, React.js, Rest API,
          Node.js, Express.js, MongoDB, and Google Cloud.{" "}
        </p>
      </div>
    </section>
  );
}

export default About;
