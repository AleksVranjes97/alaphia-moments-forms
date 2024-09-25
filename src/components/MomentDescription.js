import { useEffect } from 'react';
import useFormContext from "../hooks/useFormContext";

const MomentDescription = () => {

    const { data, handleChange, error } = useFormContext();

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
            <div className={(error ? "invalid-input-div" : "content-div")}>
                <h2>Moment description</h2>
                <p><strong>What is this moment about? </strong><span className="error-span">*</span></p>
                <input type="text"
                       id="moment"
                       name="moment"
                       placeholder="Your answer"
                       value={data.moment}
                       onChange={handleChange} />
                { error ? <p className="error-p">This is a required question</p> : <div className="space-div"><p></p></div>}
            </div>
        </div>
    )

    return content;
}

export default MomentDescription;