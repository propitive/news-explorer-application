import selfieOfMe from "../../images/selfieOfMe.PNG"

function About() {
    return (
        <section className="about">
            <img className="about__picture" src={selfieOfMe} alt="Selfie of Jose Maldonado" />
            <div className="about__content">
                <h2 className="about__title">About the author</h2>
                <h3 className="about__paragraphs">In a galaxy far far away... Just kidding, unfortunately, I am no Jedi! My name is Jose Maldonado, I am an aspiring software engineer currently working in the IT industry. I am confident with HTML, CSS, JavaScript, Git, Figma, React.js, Rest API, Node.js, Express.js, MongoDB, and Google Cloud. <br></br> <br></br>
                Throughout the past nine months, I have been tirelessly working to ensure I can confidently tackle any web development issue thrown my way. Moreover, the difficult challenges I have had to overcome along with the mentorship of industry veterans have been vital to the growth I have experienced in my ability to push through adversity and find the solution. </h3>
            </div>
        </section>
    )
}

export default About;