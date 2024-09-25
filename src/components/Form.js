import useFormContext from "../hooks/useFormContext";
import FormInputs from "./FormInputs";

import app from "../config.js";
import { getDatabase, ref, set, push } from "firebase/database";

const Form = () => {
    const {
        page,
        setPage,
        error,
        setError,
        clearModal,
        setClearModal,
        data,
        setData,
        prevHide,
        nextHide
    } = useFormContext();

    //-------------------------------------------------------------------------------------
    // PAGE NAVIGATION...

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
                                 ["At home",
                                  "Online",
                                  "At a restaurant/club/pub",
                                  "At work",
                                  "At school",
                                  "At a recreational event",
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
                    // Final formatting of data and send it to Firebase
                    setError(false);
                    sendData();
                    finalFormatting();
                    setPage(prev => prev + 1);
                }
                break;                 
            default:
                setError(false);
                setPage(prev => prev + 1);
        }
    }

    //----------------------------------------------------------------------------------
    // SPECIFIC FORMATTING...

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

    //------------------------------------//
    // Set all form data back to defaults //
    //------------------------------------//
    const clearForm = () => {
        setClearModal(false);
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
        }
        setData(newData);
        setPage(0);
    }

    //--------------------------------------------------------------------
    // FINAL DATA FORMATTING + SUBMISSION...

    //-------------------------------------//
    // Helper function to stringify arrays //
    //-------------------------------------//
    const stringifyArray = (arr) => {
        var textString = "";
        for (var i in arr) {
            textString += arr[i];
            if (arr[i] !== arr[arr.length - 1]) {
                textString += ", ";
            }
        }
        return textString;
    }

    //-----------------------------//
    // Last bit of data formatting //
    //-----------------------------//
    const finalFormatting = () => {

        // Add dollar sign to howMuch if it's not there
        var newVal = "";
        if (data.howMuch.charAt(0) !== "$") {
            newVal = "$" + data.howMuch;
            setData(prevData => ({
                ...prevData,
                "howMuch": newVal
            }));
        }

        // Stringify all arrays, comma separated values
        setData(prevData => ({
            ...prevData,
            "momentLocation": stringifyArray(data.momentLocation),
            "anyoneElseInvolved": stringifyArray(data.anyoneElseInvolved),
            "currentState": stringifyArray(data.currentState),
            "needs": stringifyArray(data.needs),
            "avoidFeeling": stringifyArray(data.avoidFeeling),
            "captureFeeling": stringifyArray(data.captureFeeling),
            "reflectingFeeling": stringifyArray(data.reflectingFeeling)
        }));
    }

    //-------------------------------------//
    // Send form data to Firebase database //
    //-------------------------------------//
    const sendData = () => {
        const db = getDatabase(app);
        const newEntry = push(ref(db, "data"));
        set(newEntry, {
            data: data
        })
    }

    //---------------------------------------------------------------
    // DEBUGGING FUNCTIONS...

    const printData = () => {
        console.log(data);
        console.log("error: ", error);
        console.log("page: ", page);
    }

    const jumpToGraph = () => {
        setPage(19);
    }

    //---------------------------------------------------------------
    // RENDER COMPONENT...

    const content = (
        <form className={(clearModal ? "dim-background-div" : "master-form")} onSubmit={handleSubmit}>
            <header>
            {page !== 17 ?
                <div className="image-div"></div>
                :
                <></>
            }
            </header>
            <FormInputs></FormInputs> 
            <footer>
                <div className="footer-div">
                    <div>
                        <button type="button" className={`normal-button ${prevHide}`}onClick={handlePrev}>Back</button>
                        {page === 16 ?
                            <button type="button" className={`normal-button ${nextHide}`}onClick={handleNext}>Submit</button>
                            :
                            <button type="button" className={`normal-button ${nextHide}`}onClick={handleNext}>Next</button>
                        }
                    </div>
                    {page === 17 ? 
                        <></>
                        :
                        <p className="page-p">Page {page + 1}/18</p>
                    }
                    {/*<button onClick={jumpToGraph}>Graph</button>*/}
                    {/*<button onClick={printData}>Print</button>*/}
                    {page === 17  ? 
                        <button type="button" className="home-button" onClick={clearForm}>Home</button>
                        :
                        <button type="button" className="clear-form-button" onClick={clearForm}>Clear Form</button>
                    }
                </div>
            </footer>
        </form>
    )

    return content;
}

export default Form;