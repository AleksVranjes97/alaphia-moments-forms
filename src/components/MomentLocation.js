import useFormContext from "../hooks/useFormContext";

const MomentLocation = () => {

    const { data, handleChange, handleOther, error } = useFormContext()

    const content = (
        <div>
            <div className="content-div">
                <div className="orange-banner-sm"></div>
                <h1>Welcome to Alaphia Moments</h1>
                <hr></hr>
                <p className="error-p">* Indicates required question</p>       
            </div>
            <div className={(error ? 'invalid-input-div' : 'content-div')}>
                <h2>External factors</h2>
                <p><strong>Where did this moment take place? </strong><span className="error-span">*</span></p>
                <div className="checkbox-div">
                    <label>
                        <input type="checkbox" 
                               id="home" 
                               name="momentLocation"
                               value="Home"
                               checked={data.momentLocation.includes("Home")}
                               onChange={handleChange} />
                        Home
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="online" 
                               name="momentLocation" 
                               value="Online"
                               checked={data.momentLocation.includes("Online")}
                               onChange={handleChange} />
                        Online
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="rcp" 
                               name="momentLocation"
                               value="Restaurant/club/pub"
                               checked={data.momentLocation.includes("Restaurant/club/pub")}
                               onChange={handleChange} />
                        Restaurant/club/pub
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="work" 
                               name="momentLocation"
                               value="Work"
                               checked={data.momentLocation.includes("Work")}
                               onChange={handleChange} />
                        Work
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="school" 
                               name="momentLocation"
                               value="School"
                               checked={data.momentLocation.includes("School")}
                               onChange={handleChange} />
                        School
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="re" 
                               name="momentLocation" 
                               value="Recreational event"
                               checked={data.momentLocation.includes("Recreational event")}
                               onChange={handleChange} />
                        Recreational event
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="aaips" 
                               name="momentLocation"
                               value="At an in-person store"
                               checked={data.momentLocation.includes("At an in-person store")}
                               onChange={handleChange} />
                        At an in-person store
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="aasg" 
                               name="momentLocation"
                               value="At a social gathering"
                               checked={data.momentLocation.includes("At a social gathering")}
                               onChange={handleChange} />
                        At a social gathering
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="vacation" 
                               name="momentLocation"
                               value="On vacation"
                               checked={data.momentLocation.includes("On vacation")}
                               onChange={handleChange} />
                        On vacation
                    </label>
                    <label>
                        <input type="checkbox" 
                               id="otherEfCb"
                               name="mLOtherCheckbox"
                               checked={data.mLOtherCheckbox}
                               onChange={handleOther}/>
                        Other
                        <input type="text"
                               id="mLOtherField"
                               name="mLOtherField"
                               value={data.mLOtherField}
                               onChange={handleChange} />
                    </label>
                    { error ? <p className="error-p">Please select at least one option</p> : <br></br>}
                </div>
            </div>
        </div>
    )

    return content;
}

export default MomentLocation;