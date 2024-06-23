import { useState } from "react";

import "./Keluhan.css";
import { Table } from "../components/keluhan/KeluhanTable";
import { Modal } from "../components/keluhan/KeluhanModal";

function Keluhan() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      sender: "123@gmail.com",
      alamat: "jalan depan blok ee1 no 1 valencia",
      keluhan: "lampu jalan mati",
      status: "pending",
    },
    {
      sender: "123@gmail.com",
      alamat: "jalan depan blok ee1 no 1 valencia",
      keluhan: "lampu jalan mati",
      status: "proses",
    },
    {
      sender: "123@gmail.com",
      alamat: "jalan depan blok ee1 no 1 valencia",
      keluhan: "lampu jalan mati",
      status: "done",
    },
    {
      sender: "123@gmail.com",
      alamat: "jalan depan blok ee1 no 1 valencia",
      keluhan: "lampu jalan mati",
      status: "decline",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="Keluhan">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default Keluhan;
