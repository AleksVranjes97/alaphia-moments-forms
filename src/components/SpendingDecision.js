import useFormContext from "../hooks/useFormContext";

const SpendingDecision = () => {

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
            <p><strong>Is there a spending decision involved in this moment? </strong><span className="error-span">*</span></p>
            <input type="radio" 
                   id="yes" 
                   name="spendingDecision"
                   value="yes"
                   checked={data.spendingDecision === "yes"}
                   onChange={handleChange} />
            <label htmlFor="yes">Yes</label><br></br>
            <br />
            <input type="radio" 
                   id="no" 
                   name="spendingDecision"
                   value="no"
                   checked={data.spendingDecision === "no"}
                   onChange={handleChange} />
            <label htmlFor="no">No</label><br></br>
            <br />
        </div>
    </div>
    )

    return content;
}

export default SpendingDecision;