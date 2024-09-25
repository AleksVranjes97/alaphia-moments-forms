import { useEffect } from 'react';
import useFormContext from "../hooks/useFormContext";

const CurrentState = () => {

    const { data, handleChange, handleOther, error } = useFormContext();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const content = (
        <div>
            <div className="content-div">
                <div className="orange-banner-sm"></div>
                <h1>Welcome to Alaphia Moments</h1>
                <hr></hr>
                <p className="error-p">* Indicates required question</p>      
            </div>
            <div className={(error ? 'invalid-input-div' : 'content-div')}>
                <h2>Internal factors</h2>
                <p><strong>What is your current state of being? </strong><span className="error-span">*</span></p>
                <p>If you are reflecting on a past moment, try to recall your state of being at the time.</p>
                <p>This list is not comprehensive. Please feel free to add your own.</p>
                <div className="checkbox-div">
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="tired" 
                               name="currentState"
                               value="tired"
                               checked={data.currentState.includes("tired")}
                               onChange={handleChange} />
                        <label htmlFor="tired">tired</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="hod" 
                               name="currentState"
                               value="hungry or dehydrated"
                               checked={data.currentState.includes("hungry or dehydrated")}
                               onChange={handleChange} />
                        <label htmlFor="hod">hungry or dehydrated</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="excited"
                               name="currentState"
                               value="excited"
                               checked={data.currentState.includes("excited")}
                               onChange={handleChange} />
                        <label htmlFor="excited">excited</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="peevish"
                               name="currentState"
                               value="peevish"
                               checked={data.currentState.includes("peevish")}
                               onChange={handleChange} />
                        <label htmlFor="peevish">peevish</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="bored"
                               name="currentState"
                               value="bored"
                               checked={data.currentState.includes("bored")}
                               onChange={handleChange} />
                        <label htmlFor="bored">bored</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="lonely"
                               name="currentState"
                               value="lonely"
                               checked={data.currentState.includes("lonely")}
                               onChange={handleChange} />
                        <label htmlFor="lonely">lonely</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="utw"
                               name="currentState"
                               value="under the weather"
                               checked={data.currentState.includes("under the weather")}
                               onChange={handleChange} />
                        <label htmlFor="utw">under the weather</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="restless"
                               name="currentState"
                               value="restless"
                               checked={data.currentState.includes("restless")}
                               onChange={handleChange} />
                        <label htmlFor="restless">restless</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="balanced"
                               name="currentState"
                               value="balanced"
                               checked={data.currentState.includes("balanced")}
                               onChange={handleChange} />
                        <label htmlFor="balanced">balanced</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="rushed/pressured"
                               name="currentState"
                               value="rushed/pressured"
                               checked={data.currentState.includes("rushed/pressured")}
                               onChange={handleChange} />
                        <label htmlFor="rushed/pressured">rushed/pressured</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="calm"
                               name="currentState"
                               value="calm"
                               checked={data.currentState.includes("calm")}
                               onChange={handleChange} />
                        <label htmlFor="calm">calm</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="energized"
                               name="currentState"
                               value="energized"
                               checked={data.currentState.includes("energized")}
                               onChange={handleChange} />
                        <label htmlFor="energized">energized</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="hopeful"
                               name="currentState"
                               value="hopeful"
                               checked={data.currentState.includes("hopeful")}
                               onChange={handleChange} />
                        <label htmlFor="hopeful">hopeful</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="frustrated"
                               name="currentState"
                               value="frustrated"
                               checked={data.currentState.includes("frustrated")}
                               onChange={handleChange} />
                        <label htmlFor="frustrated">frustrated</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="anxious"
                               name="currentState"
                               value="anxious"
                               checked={data.currentState.includes("anxious")}
                               onChange={handleChange} />
                        <label htmlFor="anxious">anxious</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="happy"
                               name="currentState"
                               value="happy"
                               checked={data.currentState.includes("happy")}
                               onChange={handleChange} />
                        <label htmlFor="happy">happy</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="alert"
                               name="currentState"
                               value="alert"
                               checked={data.currentState.includes("alert")}
                               onChange={handleChange} />
                        <label htmlFor="alert">alert</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="overwhelmed"
                               name="currentState"
                               value="overwhelmed"
                               checked={data.currentState.includes("overwhelmed")}
                               onChange={handleChange} />
                        <label htmlFor="overwhelmed">overwhelmed</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="avoidant"
                               name="currentState"
                               value="avoidant"
                               checked={data.currentState.includes("avoidant")}
                               onChange={handleChange} />
                        <label htmlFor="avoidant">avoidant</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="idkCS"
                               name="currentState"
                               value="I don't know/not sure"
                               checked={data.currentState.includes("I don't know/not sure")}
                               onChange={handleChange} />
                        <label htmlFor="idkCS">I don't know/not sure</label>
                    </div>
                    <div className="check-options-div">
                        <input type="checkbox" 
                               id="othercSCb"
                               name="cSOtherCheckbox"
                               checked={data.cSOtherCheckbox}
                               onChange={handleOther}/>
                        <label htmlFor="othercSCb">Other</label>
                        <input type="text"
                               id="cSOtherField"
                               name="cSOtherField"
                               value={data.cSOtherField}
                               onChange={handleChange} />
                    </div>
                    { error ? <p className="error-p">Please select at least one option</p> : <br></br>}
                </div>
            </div>
        </div>
    )

    return content;
}

export default CurrentState;