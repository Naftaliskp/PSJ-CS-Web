import React, { useState } from "react";

import "./InformasiModal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      judul: "",
      tanggal: "",
      isi: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.judul&& formState.tanggal && formState.isi) {
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
            <label htmlFor="judul">Judul</label>
            <input id="judul" name="judul" onChange={handleChange} value={formState.judul} />
          </div>
          <div className="form-group">
            <label htmlFor="tanggal">Tanggal</label>
            <input id="tanggal" name="tanggal" onChange={handleChange} value={formState.tanggal} />
          </div>
          <div className="form-group">
            <label htmlFor="isi">Isi</label>
            <textarea 
              id="isi" name="isi" 
              onChange={handleChange} 
              value={formState.isi} />
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


