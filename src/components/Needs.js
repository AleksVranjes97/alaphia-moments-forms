import useFormContext from "../hooks/useFormContext";

const Needs = () => {

    const { data, handleChange, handleOther, error } = useFormContext()

    const content = (
        <div>
            <div className="content-div">
                <div className="orange-banner-sm"></div>
                <h1>Welcome to Alaphia Moments</h1>
                <hr />
                <p className="error-p">* Indicates required question</p>       
            </div>
            <div className={(error ? 'invalid-input-div' : 'content-div')}>
                <h2>Internal factors - Needs</h2>
                <p><strong>What needs are you experiencing in the moment you're reflecting on? </strong><span className="error-span">*</span></p>
                <p><strong>Note:</strong> Even if others are involved in this situation, focus on your own needs as you respond, rather than considering the needs of those around you that you might be trying to fulfill.</p>
                <div className="checkbox-div">
                    <label>
                        <input type="checkbox" 
                               id="power" 
                               name="needs"
                               value="Power"
                               checked={data.needs.includes("Power")}
                               onChange={handleChange} />
                        POWER influence competence effectiveness respect
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="autonomy" 
                               name="needs"
                               value="Autonomy"
                               checked={data.needs.includes("Autonomy")}
                               onChange={handleChange} />
                        AUTONOMY independence self-reliance authenticity self-expression solidute choice
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="curiosity" 
                               name="needs"
                               value="Curiosity"
                               checked={data.needs.includes("Curiosity")}
                               onChange={handleChange} />
                        CURIOSITY Knowledge creativity exploration aliveness intensity adventure
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="belonging" 
                               name="needs"
                               value="Belonging"
                               checked={data.needs.includes("Belonging")}
                               onChange={handleChange} />
                        BELONGING acceptance inclusion recognition connection companionship communion
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="security" 
                               name="needs"
                               value="Security"
                               checked={data.needs.includes("Security")}
                               onChange={handleChange} />
                        SECURITY order structure predictability safety consistency
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="justice" 
                               name="needs"
                               value="Justice"
                               checked={data.needs.includes("Justice")}
                               onChange={handleChange} />
                        JUSTICE reciprocity sharing fairness revenge social justice accountability retribution
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="healing" 
                               name="needs"
                               value="Healing"
                               checked={data.needs.includes("Healing")}
                               onChange={handleChange} />
                        HEALING redemption atonement make it right
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="esteem" 
                               name="needs"
                               value="Esteem"
                               checked={data.needs.includes("Esteem")}
                               onChange={handleChange} />
                        ESTEEM acknowledgement admiration desirability adequacy worthiness
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="understanding" 
                               name="needs"
                               value="Understanding"
                               checked={data.needs.includes("Understanding")}
                               onChange={handleChange} />
                        UNDERSTANDING appreciation recognition
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="tranquility" 
                               name="needs"
                               value="Tranquility"
                               checked={data.needs.includes("Tranquility")}
                               onChange={handleChange} />
                        TRANQUILITY peace harmony calm ease quiet stillness
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="romance" 
                               name="needs"
                               value="Romance"
                               checked={data.needs.includes("Romance")}
                               onChange={handleChange} />
                        ROMANCE intimacy' passion affection tenderness touch
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="integrity" 
                               name="needs"
                               value="Integrity"
                               checked={data.needs.includes("Integrity")}
                               onChange={handleChange} />
                        INTEGRITY honour loyalty honesty ethics respect
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="physical" 
                               name="needs"
                               value="Physical"
                               checked={data.needs.includes("Physical")}
                               onChange={handleChange} />
                        PHYSICAL eating sustenance exersion fitness health nourishment
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="play" 
                               name="needs"
                               value="Play"
                               checked={data.needs.includes("Play")}
                               onChange={handleChange} />
                        PLAY spontenaity fun excitement humour joy relaxation
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="idk2" 
                               name="needs"
                               value="I don't know/not sure"
                               checked={data.needs.includes("I don't know/not sure")}
                               onChange={handleChange} />
                        I don't know/not sure
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="otherNeedsCb"
                               name="nOtherCheckbox"
                               checked={data.nOtherCheckbox}
                               onChange={handleOther}/>
                        Other
                        <input type="text"
                               id="nOtherField"
                               name="nOtherField"
                               value={data.nOtherField}
                               onChange={handleChange} />
                    </label>
                    { error ? <p className="error-p">Please select at least one option</p> : <br></br>}
                </div>
            </div>
        </div>
    )

    return content;
}

export default Needs;