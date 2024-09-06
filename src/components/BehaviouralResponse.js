import useFormContext from "../hooks/useFormContext";

const BehaviouralResponse = () => {

    const { data, handleChange, error } = useFormContext()

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
                <p>Avoidance and Withdrawal Avoiding, Numbing (through screens, eating, substances, shopping, etc.)Quitting,Procrastinating, Ignoring, Withdrawing, Denying, Sleeping, Leaving, Pretending</p>
                <p>Confrontation and Conflict Judging, Scolding, Attacking,Arguing, Criticizing, Yelling, Avenging, Nagging,</p> 
                <p>Coping  Surrendering, Crying, Grieving, Imagining, Rescuing, Exercising </p>
                <p>Social and Communication, Joking, Talking, Negotiating, Deflecting, Convincing, Explaining, Laughing, Joining, Agreeing, Acquiescing, Empathizing</p>
                <p>Analysis and Reflection, Inquiring, Analyzing, Ruminating, Justifying, Catastrophizing</p>
                <p>Accumulation and Preparation Spending, Accumulating, Stockpiling</p>
                <p>Celebration and Acceptance Celebrating, Pursuing</p>
                <p>Rebellion and Resistance Rebelling, Posturing</p>
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