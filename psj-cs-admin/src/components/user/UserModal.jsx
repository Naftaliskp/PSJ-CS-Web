// import React, { useState } from "react";

// import "./UserModal.css";

// export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
//   const [formState, setFormState] = useState(
//     defaultValue || {
//       email: "",
//       password: "",
//     }
//   );
//   const [errors, setErrors] = useState("");

//   const validateForm = () => {
//     if (formState.email && formState.password) {
//       setErrors("");
//       return true;
//     } else {
//       let errorFields = [];
//       for (const [key, value] of Object.entries(formState)) {
//         if (!value) {
//           errorFields.push(key);
//         }
//       }
//       setErrors(errorFields.join(", "));
//       return false;
//     }
//   };

//   const handleChange = (e) => {
//     setFormState({ ...formState, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     onSubmit(formState);

//     closeModal();
//   };

//   return (
//     <div
//       className="modal-container"
//       onClick={(e) => {
//         if (e.target.className === "modal-container") closeModal();
//       }}
//     >
//       <div className="modal">
//         <form>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <textarea
//               name="email"
//               onChange={handleChange}
//               value={formState.email}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input name="password" onChange={handleChange} value={formState.password} />
//           </div>
//           {errors && <div className="error">{`Please include: ${errors}`}</div>}
//           <button type="submit" className="btn" onClick={handleSubmit}>
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";

import "./UserModal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      email: "",
      password: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.email && formState.password) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <textarea
              name="email"
              onChange={handleChange}
              value={formState.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input name="password" onChange={handleChange} value={formState.password} />
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

