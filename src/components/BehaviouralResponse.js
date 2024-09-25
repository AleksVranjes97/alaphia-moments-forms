import { useEffect } from 'react';
import useFormContext from "../hooks/useFormContext";

const BehaviouralResponse = () => {

    const { data, handleChange, error } = useFormContext();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const content = (
        <div>
            <div className="content-div">
                <div className="orange-banner-sm"></div>
                <h1>Welcome to Alaphia Moments</h1>
                <hr />
                <p className="error-p">* Indicates required question</p>
            </div>
            <div className={(error ? "invalid-input-div" : "content-div")}>
                <p><strong>What type of behavioural response did you exhibit based on the needs and emotions you identified in this reflective exercise? </strong><span className="error-span">*</span></p>
                <p>Examples of behaviour responses are usually one word verbs.</p>
                <p>For instance:</p>
                <p><strong>Avoidance and Withdrawal</strong> Avoiding, Numbing (through screens, eating, substances, shopping, etc.) Quitting,Procrastinating, Ignoring, Withdrawing, Denying, Sleeping, Leaving, Pretending</p>
                <p><strong>Confrontation and Conflict</strong> Judging, Scolding, Attacking,Arguing, Criticizing, Yelling, Avenging, Nagging,</p> 
                <p><strong>Coping</strong> Surrendering, Crying, Grieving, Imagining, Rescuing, Exercising </p>
                <p><strong>Social and Communication</strong> Joking, Talking, Negotiating, Deflecting, Convincing, Explaining, Laughing, Joining, Agreeing, Acquiescing, Empathizing</p>
                <p><strong>Analysis and Reflection</strong>Inquiring, Analyzing, Ruminating, Justifying, Catastrophizing</p>
                <p><strong>Accumulation and Preparation</strong> Spending, Accumulating, Stockpiling</p>
                <p><strong>Celebration and Acceptance</strong> Celebrating, Pursuing</p>
                <p><strong>Rebellion and Resistance</strong> Rebelling, Posturing</p>
                <input type="text"
                       id="behaviouralResponse"
                       name="behaviouralResponse"
                       placeholder="Your answer"
                       value={data.behaviouralResponse}
                       onChange={handleChange} />
                { error ? <p className="error-p">This is a required question</p> : <div className="space-div"><p></p></div>}
            </div>
        </div>
    )

    return content;
}

export default BehaviouralResponse;