import useFormContext from "../hooks/useFormContext";

const Welcome = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div>
            <div className="content-div">
                <div className="orange-banner-sm"></div>
                <h1>Welcome to Alaphia Moments</h1>
                <br />
                <p><strong>Welcome to Alaphia Moments, your trusted guide to financial peace, designed to support you in your journey towards a healthier financial mindset.</strong></p>
                <p></p>
                <p>This guided flow, based on scientific principles of cognitive psychology, is designed to help you  understand the root causes of your financial beliefs and behaviours and gain emotional relief and behaviour change.</p>
                <p></p>
                <p>There are no right or wrong answers to these questions. You can use this as often or as little as you like. We've found that people who engage with this exercise regularly tend to experience more dramatic results more quickly, which tends to augment hope and motivation for your journey to financial peace. </p>
                <br />           
            </div>
            <div className="content-div">
                <div className="options-div">
                    <input type="radio" 
                           id="keep"
                           name="keepReading"
                           value="true"
                           checked={data.keepReading === "true"}
                           onChange={handleChange} />
                    <label for="keep">Keep reading</label>
                </div>
                <div className="options-div">
                    <input type="radio" 
                           id="donebefore"
                           name="keepReading"
                           value="false"
                           checked={data.keepReading === "false"}
                           onChange={handleChange} />
                    <label for="donebefore">I've done this before. Take me to the tool</label>
                </div>
            </div>
        </div>
    )

    return content;
}

export default Welcome;