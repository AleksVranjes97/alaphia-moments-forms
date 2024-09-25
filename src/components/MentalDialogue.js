import { useEffect } from 'react';
import useFormContext from "../hooks/useFormContext";

const MentalDialogue = () => {

    const { data, handleChange } = useFormContext();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const content = (
        <div>
            <div className="content-div">
                <div className="orange-banner-sm"></div>
                <h1>Welcome to Alaphia Moments</h1>         
            </div>
            <div className="content-div">
                <h2>Internal factors - Mental dialogue</h2>
                <p><strong>What are you telling yourself about this moment, and your potential response to it? </strong></p>
                <p>Here are examples of thoughts people have:</p>
                <p>"It's an investment in quality"</p>
                <p>"I'll deal with it when the time comes."</p>
                <p>"This is for my child, so I have to do it"</p>
                <p>"I'm making memories."</p>
                <p>"I'm an adult, I can do what I want"</p>
                <p>"If I say that I can't afford it, people will think less of me."</p>
                <p>"It's too good a deal to pass up"</p>
                <p>"I might as well. I'm so far behind, I'll never get ahead anyhow"</p>
                <p>"I've had my eye on this for ages"</p>
                <p>"I can't forgive this person after what they did"</p>
                <input type="text"
                       id="mentalDialogue"
                       name="mentalDialogue"
                       placeholder="Your answer"
                       value={data.mentalDialogue}
                       onChange={handleChange} />
                <div className="space-div"><p></p></div>
            </div>
        </div>
    )

    return content;
}

export default MentalDialogue;