import useFormContext from "../hooks/useFormContext";

const ClearFormModal = ({ clearForm }) => {

    const { setClearModal } = useFormContext();

    const onCancel = () => {
        setClearModal(false);
    }

    const content = (
        <div>
            <div className="clear-form-div">
                <h1>Clear form?</h1>
                <p>This will remove your answers from all questions, and cannot be undone.</p>
                <button onClick={clearForm}>Clear</button>
                <button onClick={onCancel}>Cancel</button>
                <p></p>
            </div>
        </div>
    )

    return content;
}

export default ClearFormModal;