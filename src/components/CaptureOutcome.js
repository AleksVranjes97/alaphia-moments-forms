import useFormContext from "../hooks/useFormContext";

const CaptureOutcome = () => {

    const { data, handleChange, handleOther } = useFormContext()

    const content = (
        <div>
            <div className="content-div">
                <div className="orange-banner-sm"></div>
                <h1>Welcome to Alaphia Moments</h1>          
            </div>
            <div className="content-div">
                <p><strong>What is the outcome you're trying to capture?</strong></p>
                <input type="text"
                       id="captureOutcome"
                       name="captureOutcome"
                       placeholder="Your answer"
                       value={data.captureOutcome}
                       onChange={handleChange} />
                <div className="space-div"><p></p></div>
            </div>
            <div className="content-div">
                <p><strong>What is the feeling you're trying to capture?</strong></p>
                <div className="checkbox-div">
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="invigoration" 
                                name="captureFeeling"
                                value="Invigoration"
                                checked={data.captureFeeling.includes("Invigoration")}
                                onChange={handleChange} />
                        <label htmlFor="invigoration">INVIGORATION Anticipation Interest, Curiosity</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="enjoyment" 
                                name="captureFeeling"
                                value="Enjoyment"
                                checked={data.captureFeeling.includes("Enjoyment")}
                                onChange={handleChange} />
                        <label htmlFor="enjoyment">ENJOYMENT Contentment, Satisfaction, Relaxation, Amusement, Relief</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="joy" 
                                name="captureFeeling"
                                value="joy"
                                checked={data.captureFeeling.includes("joy")}
                                onChange={handleChange} />
                        <label htmlFor="joy">JOY Happiness, Delight, Excitement, bliss, euphoria</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="trust" 
                                name="captureFeeling"
                                value="Trust"
                                checked={data.captureFeeling.includes("Trust")}
                                onChange={handleChange} />
                        <label htmlFor="trust">TRUST, Assurance, tolerance</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="confidence" 
                                name="captureFeeling"
                                value="Confidence"
                                checked={data.captureFeeling.includes("Confidence")}
                                onChange={handleChange} />
                        <label htmlFor="confidence">CONFIDENCE, self assurance</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="surprise" 
                                name="captureFeeling"
                                value="Surprise"
                                checked={data.captureFeeling.includes("Surprise")}
                                onChange={handleChange} />
                        <label htmlFor="surprise">SURPRISE  Distraction, interest, awe</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="calm" 
                                name="captureFeeling"
                                value="calm"
                                checked={data.captureFeeling.includes("calm")}
                                onChange={handleChange} />
                        <label htmlFor="calm">CALM, peacefulness, serenity, equanimity</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="idk4" 
                                name="captureFeeling"
                                value="I don't know/not sure"
                                checked={data.captureFeeling.includes("I don't know/not sure")}
                                onChange={handleChange} />
                        <label htmlFor="idk4">I don't know/not sure</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="otherCOCb"
                               name="cOOtherCheckbox"
                               checked={data.cOOtherCheckbox}
                               onChange={handleOther}/>
                        <label htmlFor="otherCOCb">Other</label>
                        <input type="text"
                               id="cOOtherField"
                               name="cOOtherField"
                               value={data.cOOtherField}
                               onChange={handleChange} />
                    </div>
                    <br />
                </div>
            </div>
            <div className="content-div">
                <p><strong>Where in your body do you feel this?</strong></p>
                <input type="text"
                       id="cOBodyFeeling"
                       name="cOBodyFeeling"
                       placeholder="Your answer"
                       value={data.cOBodyFeeling}
                       onChange={handleChange} />
                <div className="space-div"><p></p></div>
            </div>
        </div>
    )

    return content;
}

export default CaptureOutcome;