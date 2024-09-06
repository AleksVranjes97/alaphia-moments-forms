import useFormContext from "../hooks/useFormContext";

const ReflectingFeeling = () => {

    const { data, handleChange, handleOther, error } = useFormContext()

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
                    <label>
                        <input type="checkbox" 
                                id="sadness" 
                                name="reflectingFeeling"
                                value="Sadness"
                                checked={data.reflectingFeeling.includes("Sadness")}
                                onChange={handleChange} />
                        Sadness Disappointment, grief, anguish, despair, heartache, loneliness
                    </label>
                    <label>
                        <input type="checkbox" 
                                id="fear" 
                                name="reflectingFeeling"
                                value="Fear"
                                checked={data.reflectingFeeling.includes("Fear")}
                                onChange={handleChange} />
                        Fear Apprehension, Worry, Nervousness, Unease, anxiety, alarm, panic
                    </label>
                    <label>
                        <input type="checkbox" 
                                id="shame" 
                                name="reflectingFeeling"
                                value="Shame"
                                checked={data.reflectingFeeling.includes("Shame")}
                                onChange={handleChange} />
                        Shame Sheepishness, embarrasment, humiliation, disgrace
                    </label>
                    <label>
                        <input type="checkbox" 
                                id="envy" 
                                name="reflectingFeeling"
                                value="Envy"
                                checked={data.reflectingFeeling.includes("Envy")}
                                onChange={handleChange} />
                        Envy Jealousy
                    </label>
                    <label>
                        <input type="checkbox" 
                                id="guilt" 
                                name="reflectingFeeling"
                                value="Guilt"
                                checked={data.reflectingFeeling.includes("Guilt")}
                                onChange={handleChange} />
                        Guilt Regretful, Sorry
                    </label>
                    <label>
                        <input type="checkbox" 
                                id="anger" 
                                name="reflectingFeeling"
                                value="Anger"
                                checked={data.reflectingFeeling.includes("Anger")}
                                onChange={handleChange} />
                        Anger Annoyance, Irritation, Frustration, Agitation, rage, fury
                    </label>
                    <label>
                        <input type="checkbox" 
                                id="contempt" 
                                name="reflectingFeeling"
                                value="Contempt"
                                checked={data.reflectingFeeling.includes("Contempt")}
                                onChange={handleChange} />
                        Contempt, Revulsion, Loathing, Repugnance, disgust
                    </label>
                    <label>
                        <input type="checkbox" 
                                id="trust" 
                                name="reflectingFeeling"
                                value="Trust"
                                checked={data.reflectingFeeling.includes("Trust")}
                                onChange={handleChange} />
                        Trust, Assurance, tolerance
                    </label>
                    <label>
                        <input type="checkbox" 
                                id="admiration" 
                                name="reflectingFeeling"
                                value="Admiration"
                                checked={data.reflectingFeeling.includes("Admiration")}
                                onChange={handleChange} />
                        Admiration, Respect
                    </label>
                    <label>
                        <input type="checkbox" 
                                id="surprise" 
                                name="reflectingFeeling"
                                value="Surprise"
                                checked={data.reflectingFeeling.includes("Surprise")}
                                onChange={handleChange} />
                        Surprise Distraction, interest, awe
                    </label>
                    <label>
                        <input type="checkbox" 
                                id="enjoyment" 
                                name="reflectingFeeling"
                                value="Enjoyment"
                                checked={data.reflectingFeeling.includes("Enjoyment")}
                                onChange={handleChange} />
                        Enjoyment Contentment, Satisfaction, Relaxation, Amusement, Relief
                    </label>
                    <label>
                        <input type="checkbox" 
                                id="joy" 
                                name="reflectingFeeling"
                                value="Joy"
                                checked={data.reflectingFeeling.includes("Joy")}
                                onChange={handleChange} />
                        Joy, Happiness, Delight, Excitement, bliss, euphoria
                    </label>
                    <label>
                        <input type="checkbox" 
                                id="idk5" 
                                name="reflectingFeeling"
                                value="I don't know/not sure"
                                checked={data.reflectingFeeling.includes("I don't know/not sure")}
                                onChange={handleChange} />
                        I don't know/not sure
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="otherRFCb"
                               name="rFOtherCheckbox"
                               checked={data.rFOtherCheckbox}
                               onChange={handleOther}/>
                        Other
                        <input type="text"
                               id="rFOtherField"
                               name="rFOtherField"
                               value={data.rFOtherField}
                               onChange={handleChange} />
                    </label>
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