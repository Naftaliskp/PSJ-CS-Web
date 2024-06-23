import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./PenghuniTable.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th className="expand">Nama</th>
            <th>Cluster</th>
            <th>Blok</th>
            <th>No Rumah</th>
            <th>Tagihan IPL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.email}</td>
                <td>{row.nama}</td>
                <td>{row.cluster}</td>
                <td>{row.blok}</td>
                <td>{row.no}</td>
                <td>{row.tagihan}</td>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
