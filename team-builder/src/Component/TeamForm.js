import React, {useState} from 'react';

const TeamForm = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: ''
    })

    const clearForm = () => {
        setFormData({ name: '', email: '', role: '', });
      };


    const handleSubmit = (event) => {
        event.preventDefault();
        clearForm();
        
    }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value});
      };

    return (
    <form onSubmit={handleSubmit}
    
    >
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value= {formData.name}
        onChange= {handleChange}
      />

     <label htmlFor="email">Email:</label>
      <input
        name="email"
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="role">Role:</label>
      <input
        name="role"
        type="text"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
       />
       <button type="submit">Submit</button>
    </form>
    )
}

export default TeamForm;