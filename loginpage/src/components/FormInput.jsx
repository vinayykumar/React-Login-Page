import "../components/forms.css"

const Forminput = (props) => {
    return (
        <div className="formInput">
            <label htmlFor="">{props.placeholder}</label>
            <input ref={props.refer} type="text" placeholder={props.placeholder}  />
        </div>
    )
}

export default Forminput;