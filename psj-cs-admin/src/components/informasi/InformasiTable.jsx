import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./InformasiTable.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Action</th>
            <th>Judul</th>
            <th>Tanggal</th>
            <th className="expand">Isi</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
                <td>{row.judul}</td>
                <td>{row.tanggal}</td>
                <td>{row.isi}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
