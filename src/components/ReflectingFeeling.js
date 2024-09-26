import { useEffect } from 'react';
import useFormContext from "../hooks/useFormContext";

const ReflectingFeeling = () => {

    const { data, handleChange, handleOther, error } = useFormContext();

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
            <div className="content-div">
                <p><strong>What feeling are you experiencing in the moment you're reflecting on?</strong><span className="error-span"></span></p>
                <div className="checkbox-div">
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="sadness2"
                                name="reflectingFeeling"
                                value="Sadness"
                                checked={data.reflectingFeeling.includes("Sadness")}
                                onChange={handleChange} />
                        <label htmlFor="sadness2">Sadness Disappointment, grief, anguish, despair, heartache, loneliness</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="fear2" 
                                name="reflectingFeeling"
                                value="Fear"
                                checked={data.reflectingFeeling.includes("Fear")}
                                onChange={handleChange} />
                        <label htmlFor="fear2">Fear Apprehension, worry, nervousness, unease, anxiety, alarm, panic</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="shame2" 
                                name="reflectingFeeling"
                                value="Shame"
                                checked={data.reflectingFeeling.includes("Shame")}
                                onChange={handleChange} />
                        <label htmlFor="shame2">Shame Sheepishness, embarrasment, humiliation, disgrace</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="envy2" 
                                name="reflectingFeeling"
                                value="Envy"
                                checked={data.reflectingFeeling.includes("Envy")}
                                onChange={handleChange} />
                        <label htmlFor="envy2">Envy Jealousy</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="guilt2" 
                                name="reflectingFeeling"
                                value="Guilt"
                                checked={data.reflectingFeeling.includes("Guilt")}
                                onChange={handleChange} />
                        <label htmlFor="guilt2">Guilt Regretful, sorry</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="anger3" 
                                name="reflectingFeeling"
                                value="Anger"
                                checked={data.reflectingFeeling.includes("Anger")}
                                onChange={handleChange} />
                        <label htmlFor="anger3">Anger Annoyance, irritation, frustration, agitation, rage, fury</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="contempt2" 
                                name="reflectingFeeling"
                                value="Contempt"
                                checked={data.reflectingFeeling.includes("Contempt")}
                                onChange={handleChange} />
                        <label htmlFor="contempt2">Contempt, Revulsion, loathing, repugnance, disgust</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="trust2" 
                                name="reflectingFeeling"
                                value="Trust"
                                checked={data.reflectingFeeling.includes("Trust")}
                                onChange={handleChange} />
                        <label htmlFor="trust2">Trust, Assurance, tolerance</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="admiration" 
                                name="reflectingFeeling"
                                value="Admiration"
                                checked={data.reflectingFeeling.includes("Admiration")}
                                onChange={handleChange} />
                        <label htmlFor="admiration">Admiration, Respect</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="surprise2" 
                                name="reflectingFeeling"
                                value="Surprise"
                                checked={data.reflectingFeeling.includes("Surprise")}
                                onChange={handleChange} />
                        <label htmlFor="surprise2">Surprise Distraction, interest, awe</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="enjoyment2" 
                                name="reflectingFeeling"
                                value="Enjoyment"
                                checked={data.reflectingFeeling.includes("Enjoyment")}
                                onChange={handleChange} />
                        <label htmlFor="enjoyment2">Enjoyment Contentment, satisfaction, relaxation, amusement, relief</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="joy2" 
                                name="reflectingFeeling"
                                value="Joy"
                                checked={data.reflectingFeeling.includes("Joy")}
                                onChange={handleChange} />
                        <label htmlFor="joy2">Joy, Happiness, delight, excitement, bliss, euphoria</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                                id="idk5" 
                                name="reflectingFeeling"
                                value="I don't know/not sure"
                                checked={data.reflectingFeeling.includes("I don't know/not sure")}
                                onChange={handleChange} />
                        <label htmlFor="idk5">I don't know/not sure</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="otherRFCb"
                               name="rFOtherCheckbox"
                               checked={data.rFOtherCheckbox}
                               onChange={handleOther}/>
                       <label htmlFor="otherRFCb">Other</label>
                        <input type="text"
                               id="rFOtherField"
                               name="rFOtherField"
                               value={data.rFOtherField}
                               onChange={handleChange} />
                    </div>
                    <br />
                </div>
            </div>
            <div className={(error ? 'invalid-input-div' : 'content-div')}>
                <p><strong>Where in your body do you feel this? </strong><span className="error-span">*</span></p>
                <input type="text"
                       id="rFBodyFeeling"
                       name="rFBodyFeeling"
                       placeholder="Your answer"
                       value={data.rFBodyFeeling}
                       onChange={handleChange} />
                { error ? <p className="error-p">This is a required question</p> : <div className="space-div"><p></p></div>}
            </div>
        </div>
    )

    return content;
}

export default ReflectingFeeling;