import useFormContext from "../hooks/useFormContext";

const PastFutureThoughts = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div>
            <div className="content-div">
                <div className="orange-banner-sm"></div>
                <h1>Welcome to Alaphia Moments</h1>
                <hr></hr>
                <p className="error-p">* Indicates required question</p>  
            </div>
            <div className="content-div">
                <p><strong>Are thoughts of the past or future influencing you in the moment you're reflecting on? </strong><span className="error-span">*</span></p>
                <p>You may be experiencing more than one of these. Your mind and body will respond better if you focus on just one to start. Please choose the one that seems the most true for you.</p>
                <div className="options-div">
                    <input type="radio" 
                           id="one"
                           name="avoidOutcome"
                           value="one"
                           checked={data.avoidOutcome === "one"}
                           onChange={handleChange} />
                    <label for="one">I want to avoid repeating something negative that happened in the past</label>
                </div>
                <div className="options-div">
                    <input type="radio" 
                           id="two"
                           name="avoidOutcome"
                           value="two"
                           checked={data.avoidOutcome === "two"}
                           onChange={handleChange} />
                    <label for="two">I am trying to avoid something negative happening in the future</label>
                    </div>
                <div className="options-div">
                    <input type="radio" 
                           id="three"
                           name="avoidOutcome"
                           value="three"
                           checked={data.avoidOutcome === "three"}
                           onChange={handleChange} />
                    <label for="three">I am trying to recreate something positive that happened in the past</label>
                </div>
                <div className="options-div">
                    <input type="radio" 
                           id="four"
                           name="avoidOutcome"
                           value="four"
                           checked={data.avoidOutcome === "four"}
                           onChange={handleChange} />
                    <label for="four">I am trying to create a positive future outcome</label>
                </div>
                <div className="options-div">
                    <input type="radio" 
                           id="five"
                           name="avoidOutcome"
                           value="five"
                           checked={data.avoidOutcome === "five"}
                           onChange={handleChange} />
                    <label for="five">I am not being influenced by past or future thoughts</label><br></br>
                </div>
                <br />
            </div>
        </div>
    )

    return content;
}

export default PastFutureThoughts;