import { useState } from "react";

export default function RegistrationForm() {

    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            setError('All fields are required.');
            return;
        }

        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            /><input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}