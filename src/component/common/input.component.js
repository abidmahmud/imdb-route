const Input = ({ type, id, value }) => {
    const handleChange = () => {

    }
    return (
        <>
            <input
                type={type}
                className="form-control"
                id={id}
                value={value}
                onChange={handleChange}
            />
        </>
    );
}

export default Input;