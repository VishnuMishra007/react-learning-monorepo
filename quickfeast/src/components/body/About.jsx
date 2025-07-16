import AboutClass from "./AboutClass";
import './Style.css';
const About = () => {
    return(
        <> 
        <div>
            <h1 style={{display: "flex", justifyContent: "center"}}>Welcome to QuickFeast</h1>
            <p>
                Welcome to <b>QuickFeast</b>, your go-to food ordering companion crafted for speed, simplicity, and serious flavor.
                Whether you're craving a midnight snack or planning your next family meal, <b>QuickFeast</b> brings your favorite dishes from top local restaurants straight to your screen. With intuitive filtering, a sleek multicolor UI, and smart search capabilities, we make finding your next bite as easy (and tasty) as it gets.
                Behind the scenes, <b>QuickFeast</b> is designed with precision and personality. From dummy data magic to creative API integrations, every feature is thoughtfully built to deliver a seamless user experience. Because we believe great food deserves great tech.
                So go ahead—browse, bite, and feast faster than ever.
                <b>Hungry? QuickFeast has you covered.</b>
            </p>
        </div>
        <br/>
        <br/>
        <div className="line_break"><span className="font-extrabold">Line Break Below About Class Based Component</span></div>
        <AboutClass/>
        </>
       
    );
};

export default About;