import React, { useState } from "react";

import "./PenghuniModal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      email: "",
      nama: "",
      cluster: "",
      blok: "",
      no: "",
      tagihan: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.email && formState.nama && formState.cluster && formState.blok && formState.no && formState.tagihan) {
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
            <input name="email" onChange={handleChange} value={formState.email} />
          </div>
          <div className="form-group">
            <label htmlFor="nama">Nama</label>
            <input name="nama" onChange={handleChange} value={formState.nama} />
          </div>
          <div className="form-group">
            <label htmlFor="cluster">Cluster</label>
            <input name="cluster" onChange={handleChange} value={formState.cluster} />
          </div>
          <div className="form-group">
            <label htmlFor="blok">Blok</label>
            <input name="blok" onChange={handleChange} value={formState.blok} />
          </div>
          <div className="form-group">
            <label htmlFor="no">No Rumah</label>
            <input name="no" onChange={handleChange} value={formState.no} />
          </div>
          <div className="form-group">
            <label htmlFor="tagihan">Tagihan IPL</label>
            <input name="tagihan" onChange={handleChange} value={formState.tagihan} />
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


