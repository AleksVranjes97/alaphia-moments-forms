import { useEffect } from 'react';
import useFormContext from "../hooks/useFormContext";

const AvoidOutcome = () => {

    const { data, handleChange, handleOther } = useFormContext();

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
                <p><strong>What is the outcome you're trying to avoid?</strong></p>
                <input type="text"
                       id="avoidOutcomeText"
                       name="avoidOutcomeText"
                       placeholder="Your answer"
                       value={data.avoidOutcomeText}
                       onChange={handleChange} />
                <div className="space-div"><p></p></div>
            </div>
            <div className="content-div">
                <p><strong>What is the feeling you're trying to avoid?</strong></p>
                <div className="checkbox-div">
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="sadness" 
                                name="avoidFeeling"
                                value="Sadness"
                                checked={data.avoidFeeling.includes("Sadness")}
                                onChange={handleChange} />
                        <label htmlFor="sadness">SADNESS Disappointment, grief, anguish, despair, heartache, loneliness</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="fear" 
                                name="avoidFeeling"
                                value="Fear"
                                checked={data.avoidFeeling.includes("Fear")}
                                onChange={handleChange} />
                        <label htmlFor="fear">FEAR Apprehension, worry, nervousness, Unease, anxiety, alarm, panic</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="envy" 
                                name="avoidFeeling"
                                value="Envy"
                                checked={data.avoidFeeling.includes("Envy")}
                                onChange={handleChange} />
                        <label htmlFor="envy">ENVY Jealousy</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="guilt" 
                                name="avoidFeeling"
                                value="Guilt"
                                checked={data.avoidFeeling.includes("Guilt")}
                                onChange={handleChange} />
                        <label htmlFor="guilt">GUILT Regretful, sorry</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="shame" 
                                name="avoidFeeling"
                                value="Shame"
                                checked={data.avoidFeeling.includes("Shame")}
                                onChange={handleChange} />
                        <label htmlFor="shame">SHAME Sheepishness, embarrasment, humiliation, disgrace</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="anger2" 
                                name="avoidFeeling"
                                value="Anger"
                                checked={data.avoidFeeling.includes("Anger")}
                                onChange={handleChange} />
                        <label htmlFor="anger2">ANGER Annoyance, irritation, frustration, agitation, rage, fury</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="contempt" 
                                name="avoidFeeling"
                                value="Contempt"
                                checked={data.avoidFeeling.includes("Contempt")}
                                onChange={handleChange} />
                        <label htmlFor="contempt">CONTEMPT Revulsion, loathing, repugnance, disgust</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="idk3" 
                                name="avoidFeeling"
                                value="I don't know/not sure"
                                checked={data.avoidFeeling.includes("I don't know/not sure")}
                                onChange={handleChange} />
                        <label htmlFor="idk3">I don't know/not sure</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="otherAOCb"
                               name="aOOtherCheckbox"
                               checked={data.aOOtherCheckbox}
                               onChange={handleOther}/>
                        <label htmlFor="otherAOCb">Other</label>
                        <input type="text"
                               id="aOOtherField"
                               name="aOOtherField"
                               value={data.aOOtherField}
                               onChange={handleChange} />
                    </div>
                    <br />
                </div>
            </div>
            <div className="content-div">
                <p><strong>Where in your body do you feel this?</strong></p>
                <input type="text"
                       id="aOBodyFeeling"
                       name="aOBodyFeeling"
                       placeholder="Your answer"
                       value={data.aOBodyFeeling}
                       onChange={handleChange} />
                <div className="space-div"><p></p></div>
            </div>
        </div>
    )

    return content;
}

export default AvoidOutcome;