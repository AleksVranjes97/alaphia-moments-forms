import useFormContext from "../hooks/useFormContext";
import FormInputs from "./FormInputs";

const Form = () => {
    const {
        page,
        setPage,
        error,
        setError,
        data,
        setData,
        prevHide,
        nextHide
    } = useFormContext();

    //---------------------------------------------------//
    // Handle previous page navigation depending on page //
    //---------------------------------------------------//
    const handlePrev = () => {
        setError(false);
        switch(page) {
            //----------------//
            //     Page 5     //
            //----------------//
            case 4:
                data.keepReading === 'false' ? setPage(0) : setPage(prev => prev - 1)
                break;
            //----------------//
            //     Page 8     //
            //----------------//
            case 7:
                data.spendingDecision === "no" ? setPage(5) : setPage(prev => prev - 1)
                break;
            //-----------------//
            //     Page 15     //
            //-----------------//
            case 14:
                setPage(prev => prev - 2);
                break;
            //-----------------//
            //     Page 16     //
            //-----------------//
            case 15:
                setPage(prev => prev - 3);
                break;
            //-----------------//
            //     Page 17     //
            //-----------------//
            case 16:
                if (["one", "two"].includes(data.avoidOutcome)) {
                    setPage(prev => prev - 3);
                } else if (["three", "four"].includes(data.avoidOutcome)) {
                    setPage(prev => prev - 2);
                } else if (data.avoidOutcome === "five") {
                    setPage(prev => prev - 1);
                }
                break;
            default:
                setPage(prev => prev - 1);
        }
    }

    //--------------------------------------------------------------//
    // Handle next page navigation depending on page and validation //
    //--------------------------------------------------------------//
    const handleNext = () => {
        let navigate = true;
        switch(page) {
            //----------------//
            //     Page 1     //
            //----------------//
            case 0:
                setError(false);
                data.keepReading === 'false' ? setPage(4) : setPage(prev => prev + 1)
                break;
            //----------------//
            //     Page 5     //
            //----------------//
            case 4:
                if (data.moment === "") {
                    setError(true);
                } else {
                    setError(false);
                    setPage(prev => prev + 1);
                }
                break;
            //----------------//
            //     Page 6     //
            //----------------//
            case 5:
                data.spendingDecision === "no" ? setPage(7) : setPage(prev => prev + 1)
                break;
            //----------------//
            //     Page 7     //
            //----------------//
            case 6:
                if (data.howMuch === "") {
                    setError(true);
                } else {
                    setError(false);
                    setPage(prev => prev + 1);
                }
                break;
            //----------------//
            //     Page 8     //
            //----------------//
            case 7:
                navigate = handleValidation("momentLocation", "mLOtherField", "mLOtherFieldOld", "mLOtherCheckbox",
                                 ["Home",
                                  "Online",
                                  "Restaurant/club/pub",
                                  "Work",
                                  "School",
                                  "Recreational event",
                                  "At an in-person store",
                                  "At a social gathering",
                                  "On vacation"]);
                if (navigate) {
                    setError(false);
                    setPage(prev => prev + 1);
                }
                break;
            //----------------//
            //     Page 9     //
            //----------------//
            case 8:
                navigate = handleValidation("anyoneElseInvolved", "aEIOtherField", "aEIOtherFieldOld", "aEIOtherCheckbox",
                                 ["No one else, just me.",
                                  "Spouse",
                                  "Children",
                                  "Other family",
                                  "Friends",
                                  "Colleagues",
                                  "Teammates",
                                  "Classmates",
                                  "Exes"]);
                if (navigate) {
                    setError(false);
                    setPage(prev => prev + 1);
                }
                break;
            //-----------------//
            //     Page 10     //
            //-----------------//
            case 9:
                navigate = handleValidation("currentState", "cSOtherField", "cSOtherFieldOld", "cSOtherCheckbox",
                                 ["tired",
                                  "hungry or dehydrated",
                                  "excited",
                                  "peevish",
                                  "bored",
                                  "lonely",
                                  "under the weather",
                                  "restless",
                                  "balanced",
                                  "rushed/pressured",
                                  "calm",
                                  "energized",
                                  "hopeful",
                                  "frustrated",
                                  "anxious",
                                  "happy",
                                  "alert",
                                  "overwhelmed",
                                  "avoidant",
                                  "I don't know/not sure"]);
                if (navigate) {
                    setError(false);
                    setPage(prev => prev + 1);
                }
                break;
            //-----------------//
            //     Page 11     //
            //-----------------//
            case 10:
                setError(false);
                setPage(prev => prev + 1);
                break;
            //-----------------//
            //     Page 12     //
            //-----------------//
            case 11:
                navigate = handleValidation("needs", "nOtherField", "nOtherFieldOld", "nOtherCheckbox",
                                 ["Power",
                                  "Autonomy",
                                  "Curiosity",
                                  "Belonging",
                                  "Security",
                                  "Justice",
                                  "Healing",
                                  "Esteem",
                                  "Understanding",
                                  "Tranquility",
                                  "Romance",
                                  "Integrity",
                                  "Physical",
                                  "Play",
                                  "I don't know/not sure"]);
                if (navigate) {
                    setError(false);
                    setPage(prev => prev + 1);
                }
                break;
            //-----------------//
            //     Page 13     //
            //-----------------//
            case 12:
                    setError(false);
                if (["one", "two"].includes(data.avoidOutcome)) {
                    setPage(prev => prev + 1);
                } else if (["three","four"].includes(data.avoidOutcome)) {
                    setPage(prev => prev + 2);
                } else if (data.avoidOutcome === "five") {
                    setPage(prev => prev + 3);
                }
                break;
            //-----------------//
            //     Page 14     //
            //-----------------//
            case 13:
                filterArray("avoidFeeling", "aOOtherField", "aOOtherFieldOld", "aOOtherCheckbox",
                                 ["Sadness",
                                  "Fear",
                                  "Envy",
                                  "Guilt",
                                  "Shame",
                                  "Anger",
                                  "Contempt",
                                  "I don't know/not sure"]);
                setError(false);
                setPage(prev => prev + 3);
                break;
            //-----------------//
            //     Page 15     //
            //-----------------//
            case 14:
                filterArray("captureFeeling", "cOOtherField", "cOOtherFieldOld", "cOOtherCheckbox",
                                 ["Invigoration",
                                  "Enjoyment",
                                  "Joy",
                                  "Trust",
                                  "Confidence",
                                  "Surprise",
                                  "Calm",
                                  "I don't know/not sure"]);
                setError(false);
                setPage(prev => prev + 2);
                break;
            //-----------------//
            //     Page 16     //
            //-----------------//
            case 15:
                if (data.rFBodyFeeling === "") {
                    setError(true);
                } else {
                    filterArray("reflectingFeeling", "rFOtherField", "rFOtherFieldOld", "rFOtherCheckbox",
                               ["Sadness",
                                "Fear",
                                "Shame",
                                "Envy",
                                "Guilt",
                                "Anger",
                                "Contempt",
                                "Trust",
                                "Admiration",
                                "Surprise",
                                "Enjoyment",
                                "Joy",
                                "I don't know/not sure"]);
                    setError(false);
                    setPage(prev => prev + 1);
                }
                break;
            //-----------------//
            //     Page 17     //
            //-----------------//
            case 16:
                if (data.behaviouralResponse === "") {
                    setError(true);
                } else {
                    setError(false);
                    setPage(prev => prev + 1);
                }
                break;                 
            default:
                setError(false);
                setPage(prev => prev + 1);
        }
    }

    //---------------------------------------------------------------//
    // Handle all edge case validation with "Other" field user input //
    //---------------------------------------------------------------//
    const handleValidation = (mainField, newField, oldField, checkbox, options) => {
        var flag = true;
        if (data[mainField].length === 0) {
            if (data[newField] !== "" && data[checkbox]) {
                filterArray(mainField, newField, oldField, checkbox, options);
            } else {
                setError(true);
                flag = false;
            }
        } else {
            if (data[checkbox]) {
                if (data[newField] === "" && data[mainField].length === 1 && (data[mainField].includes(data[newField]) || data[mainField].includes(data[oldField]))) {
                    setError(true);
                    flag = false;
                } else {
                    filterArray(mainField, newField, oldField, checkbox, options);
                }     
            } else {
                if (data[mainField].length === 1 && (data[mainField].includes(data[newField]) || data[mainField].includes(data[oldField]))) {
                    setError(true);
                    flag = false;
                } else {
                    filterArray(mainField, newField, oldField, checkbox, options);
                }
            }
        }
        return flag;
    }

    //--------------------------------------------------------------------//
    // Filter array to update/remove other field value when clicking Next //
    // Add other field if:                                                //
    //    1. Checkbox is checked                                          //
    //    2. Field isn't empty                                            //
    //    3. Field text isn't already in array                            //
    //--------------------------------------------------------------------//
    const filterArray = (mainField, newField, oldField, checkbox, options) => {
        if (data[checkbox]) {
            if (data[newField] !== "") {
                if (!data[mainField].includes(data[newField])) {
                    setData(prevData => ({
                        ...prevData,
                        [mainField]: prevData[mainField].filter(item => item !== data[oldField]),
                    }));
                    setData(prevData => ({
                        ...prevData,
                        [mainField]: [...prevData[mainField], data[newField]],
                        [oldField]: data[newField]
                    }));                                
                }
            } else {
                const newArray = data[mainField].filter(item => options.includes(item));

                setData(prevData => ({
                    ...prevData,
                    [mainField]: newArray
                }));
            }
        } else {
            const newArray = data[mainField].filter(item => options.includes(item));

            setData(prevData => ({
                ...prevData,
                [mainField]: newArray
            }));
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    const printData = () => {
        console.log(JSON.stringify(data));
        console.log("error: ", error);
        console.log("page: ", page);
    }


    // Debugging
    const jumpToGraph = () => {
        setPage(19);
    }

    // Debugging
    const firstPage = () => {
        setPage(0);
    }

    //------------------------------------//
    // Set all form data back to defaults //
    //------------------------------------//
    const clearForm = () => {
        setError(false);
        const newData = {
            keepReading: "true",
            moment: "",
            spendingDecision: "yes",
            forWhat: "",
            howMuch: "",
            momentLocation: [],
            mLOtherField: "",
            mLOtherFieldOld: "",
            mLOtherCheckbox: false,  
            anyoneElseInvolved: [],
            aEIOtherField: "",
            aEIOtherFieldOld: "",
            aEIOtherCheckbox: false, 
            currentState: [],
            cSOtherField: "",
            cSOtherFieldOld: "",
            cSOtherCheckbox: false,
            mentalDialogue: "",
            needs: [],
            nOtherField: "",
            nOtherFieldOld: "",
            nOtherCheckbox: false,
            avoidOutcome: "one",
            avoidOutcomeText: "",
            avoidFeeling: [],
            aOOtherField: "",
            aOOtherFieldOld: "",
            aOOtherCheckbox: false,
            aOBodyFeeling: "",
            captureOutcome: "",
            captureFeeling: [],
            cOOtherField: "",
            cOOtherFieldOld: "",
            cOOtherCheckbox: false,
            cOBodyFeeling: "",
            reflectingFeeling: [],
            rFOtherField: "",
            rFOtherFieldOld: "",
            rFOtherCheckbox: false,
            rFBodyFeeling: "",
            behaviouralResponse: "",
        };
        setData(newData);
    }

    const content = (
        <form className='master-form' onSubmit={handleSubmit}>
            <header>
                <div className="image-div"></div>
            </header>
            <FormInputs></FormInputs>
            <footer>
                <div className="footer-div">
                    <div className="buttons-div">
                        <button className={`button ${prevHide}`}onClick={handlePrev}>Back</button>
                        {page === 16 ?
                            <button className={`button ${nextHide}`}onClick={handleNext}>Submit</button>
                            :
                            <button className={`button ${nextHide}`}onClick={handleNext}>Next</button>
                        }
                    </div>
                    {page === 17 ? 
                        <></>
                        :
                        <p>Page {page + 1} of 18</p>
                    }
                    {/*<button onClick={jumpToGraph}>Graph</button>
                    <button onClick={firstPage}>First page</button>*/}
                    {page === 17  ? 
                        <></>
                        :
                        <button className="clear-form-button" onClick={clearForm}>Clear Form</button>
                    }
                </div>
            </footer>
        </form>
    )

    return content;
}

export default Form;