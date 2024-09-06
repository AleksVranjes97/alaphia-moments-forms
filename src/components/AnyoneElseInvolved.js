import useFormContext from "../hooks/useFormContext";

const AnyoneElseInvolved = () => {

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
                <p><strong>Is there anyone else involved or connected to this moment? </strong><span className="error-span">*</span></p>
                <div className="checkbox-div">
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="noejm" 
                               name="anyoneElseInvolved"
                               value="No one else, just me."
                               checked={data.anyoneElseInvolved.includes("No one else, just me.")}
                               onChange={handleChange} />
                         <label htmlFor="noejm">No one else, just me.</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="spouse" 
                               name="anyoneElseInvolved" 
                               value="Spouse"
                               checked={data.anyoneElseInvolved.includes("Spouse")}
                               onChange={handleChange} />
                         <label htmlFor="spouse">Spouse</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="children" 
                               name="anyoneElseInvolved"
                               value="Children"
                               checked={data.anyoneElseInvolved.includes("Children")}
                               onChange={handleChange} />
                         <label htmlFor="children">Children</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="of" 
                               name="anyoneElseInvolved"
                               value="Other family"
                               checked={data.anyoneElseInvolved.includes("Other family")}
                               onChange={handleChange} />
                         <label htmlFor="of">Other family</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="friends" 
                               name="anyoneElseInvolved"
                               value="Friends"
                               checked={data.anyoneElseInvolved.includes("Friends")}
                               onChange={handleChange} />
                         <label htmlFor="friends">Friends</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="colleagues" 
                               name="anyoneElseInvolved" 
                               value="Colleagues"
                               checked={data.anyoneElseInvolved.includes("Colleagues")}
                               onChange={handleChange} />
                         <label htmlFor="colleagues">Colleagues</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="teammates" 
                               name="anyoneElseInvolved"
                               value="Teammates"
                               checked={data.anyoneElseInvolved.includes("Teammates")}
                               onChange={handleChange} />
                         <label htmlFor="teammates">Teammates</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="classmates" 
                               name="anyoneElseInvolved"
                               value="Classmates"
                               checked={data.anyoneElseInvolved.includes("Classmates")}
                               onChange={handleChange} />
                         <label htmlFor="classmates">Classmates</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="exes" 
                               name="anyoneElseInvolved"
                               value="Exes"
                               checked={data.anyoneElseInvolved.includes("Exes")}
                               onChange={handleChange} />
                         <label htmlFor="exes">Exes</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="otherAeiCb"
                               name="aEIOtherCheckbox"
                               checked={data.aEIOtherCheckbox}
                               onChange={handleOther}/>
                         <label htmlFor="otherAeiCb">Other</label>
                        <input type="text"
                               id="aEIOtherField"
                               name="aEIOtherField"
                               value={data.aEIOtherField}
                               onChange={handleChange} />
                    </div>
                    { error ? <p className="error-p">Please select at least one option</p> : <br></br>}
                </div>
            </div>
        </div>
    )

    return content;
}

export default AnyoneElseInvolved;