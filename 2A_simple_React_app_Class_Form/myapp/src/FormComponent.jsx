function FormComponent() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        alert(`Submitted: \nName: ${name} \nEmail: ${email}`);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter name" required/>
            <input type="email" name="email" placeholder="Enter email" required/>
            <button type="submit">Submit</button>
        </form>
    );
}
export default FormComponent;
