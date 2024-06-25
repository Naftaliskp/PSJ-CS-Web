import React, { useState } from 'react';
import { Table, Modal, Button, Form } from 'react-bootstrap';

function Keluhan() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [currentRow, setCurrentRow] = useState({ id: null, sender: '', alamat: '', keluhan: '', status: 'pending' });
  const [editing, setEditing] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setEditing(false);
    setCurrentRow({ id: null, sender: '', alamat: '', keluhan: '', status: 'pending' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentRow({ ...currentRow, [name]: value });
  };

  const handleAddRow = () => {
    setData([...data, { ...currentRow, id: data.length + 1 }]);
    setCurrentRow({ id: null, sender: '', alamat: '', keluhan: '', status: 'pending' });
    handleClose();
  };

  const handleEditRow = (row) => {
    setCurrentRow(row);
    setEditing(true);
    handleShow();
  };

  const handleUpdateRow = () => {
    setData(data.map(row => (row.id === currentRow.id ? { ...row, status: currentRow.status } : row)));
    setCurrentRow({ id: null, sender: '', alamat: '', keluhan: '', status: 'pending' });
    setEditing(false);
    handleClose();
  };


  const getStatusStyle = (status) => {
    switch (status) {
      case 'pending':
        return { backgroundColor: 'yellow', color: 'black' };
      case 'proses':
        return { backgroundColor: 'blue', color: 'white' };
      case 'done':
        return { backgroundColor: 'green', color: 'white' };
      case 'decline':
        return { backgroundColor: 'red', color: 'white' };
      default:
        return {};
    }
  };

  return (
    <div className="container mt-5">
      <Button variant="primary" onClick={handleShow}>Add Row</Button>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Actions</th>
            <th>Status</th>
            <th>Sender</th>
            <th>Alamat</th>
            <th className="expand">Keluhan</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditRow(row)}>Edit</Button>
              </td>
              <td style={getStatusStyle(row.status)}>{row.status}</td>
              <td>{row.sender}</td>
              <td>{row.alamat}</td>
              <td className="expand">{row.keluhan}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editing ? 'Edit Status' : 'Add Row'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {!editing && (
              <>
                <Form.Group className="mb-3" controlId="formSender">
                  <Form.Label>Sender</Form.Label>
                  <Form.Control
                    type="text"
                    name="sender"
                    value={currentRow.sender}
                    onChange={handleInputChange}
                    placeholder="Enter sender"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAlamat">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    type="text"
                    name="alamat"
                    value={currentRow.alamat}
                    onChange={handleInputChange}
                    placeholder="Enter alamat"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formKeluhan">
                  <Form.Label>Keluhan</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="keluhan"
                    value={currentRow.keluhan}
                    onChange={handleInputChange}
                    placeholder="Enter keluhan"
                    required
                  />
                </Form.Group>
              </>
            )}
            <Form.Group className="mb-3" controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={currentRow.status}
                onChange={handleInputChange}
              >
                <option value="pending">Pending</option>
                <option value="proses">Proses</option>
                <option value="done">Done</option>
                <option value="decline">Decline</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={editing ? handleUpdateRow : handleAddRow}>
            {editing ? 'Update' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Keluhan;
