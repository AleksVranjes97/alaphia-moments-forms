import useFormContext from "../hooks/useFormContext";

const ForWhatHowMuch = () => {

    const { data, handleChange, error } = useFormContext();

    const content = (
        <div>
            <div className="content-div">
                <div className="orange-banner-sm"></div>
                <h1>Welcome to Alaphia Moments</h1>
                <hr />
                <p className="error-p">* Indicates required question</p>     
            </div>
            <div className="content-div">
                <p>For what?</p>
                <input type="text"
                       id="forWhat"
                       name="forWhat"
                       placeholder="Your answer"
                       value={data.forWhat}
                       onChange={handleChange} />
                <div className="space-div"><p></p></div>
            </div>
            <div className={(error ? "invalid-input-div" : "content-div")}>
            <p>How much? <span className="error-span">*</span></p>
                <input type="text"
                       id="howMuch"
                       name="howMuch"
                       placeholder="Your answer"
                       value={data.howMuch}
                       onChange={handleChange} />
                { error ? <p className="error-p">This is a required question</p> : <div className="space-div"><p></p></div>}
            </div>
        </div>
    )

    return content;
}

export default ForWhatHowMuch;