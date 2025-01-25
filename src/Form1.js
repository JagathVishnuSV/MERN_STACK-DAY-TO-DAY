import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "./slices/userSlice";

export default function Form1() {
  const dispatch = useDispatch();

  // Function to handle form submission
  const addUser = (formData) => {
    formData.preventDefault();
    dispatch(setUsers(input)); // Dispatch the form data
  };

  // Function to update state when inputs change
  function updateData(d) {
    const variable = d.target.name;
    const value = d.target.value;
    setInput((data) => {
      return { ...data, [variable]: value }; // Update the respective field in state
    });
  }

  // Initial state for input fields
  const [input, setInput] = useState({
    roll: '',
    name: '',
    city: '',
  });

  return (
    <>
      <div className="container mt-5">
        <h2>Sign Up Form</h2>
        <form onSubmit={addUser} className="shadow-lg p-4 mb-5 bg-white rounded">
          
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={input.name}
              onChange={updateData}
              required
            />
          </div>

          {/* Roll */}
          <div className="mb-3">
            <label htmlFor="roll" className="form-label">Roll</label>
            <input
              type="text"
              name="roll"
              className="form-control"
              value={input.roll}
              onChange={updateData}
              required
            />
          </div>

          {/* City */}
          <div className="mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={input.city}
              onChange={updateData}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
      </div>
    </>
  );
}

/*
        <>
        <form>
        Name:<input type ='text' name='name' onChange={updateData}></input><br/>
        Roll:<input type ='text' name='roll' onChange={updateData}></input><br/>
        City:<input type ='text' name='city' onChange={updateData}></input><br/>
        <input type='submit' onClick={addUser} value='signup'></input>
        </form>
        </>*/