import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function User() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [currentRow, setCurrentRow] = useState({ id: null, email: '', password: '' });
  const [editing, setEditing] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentRow({ ...currentRow, [name]: value });
  };

  const handleAddRow = () => {
    setData([...data, { ...currentRow, id: data.length + 1 }]);
    setCurrentRow({ id: null, email: '', password: '' });
    handleClose();
  };

  const handleEditRow = (row) => {
    setCurrentRow(row);
    setEditing(true);
    handleShow();
  };

  const handleUpdateRow = () => {
    setData(data.map(row => (row.id === currentRow.id ? currentRow : row)));
    setCurrentRow({ id: null, email: '', password: '' });
    setEditing(false);
    handleClose();
  };

  const handleDeleteRow = (id) => {
    setData(data.filter(row => row.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      handleUpdateRow();
    } else {
      handleAddRow();
    }
  };

  return (
    <div className="container my-5">
      <Button variant="primary" onClick={handleShow}>Tambah User</Button>
      <table className="table mt-3 mb-5">
        <thead>
          <tr>
            <th>ID</th>
            <th className="expand">Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td className="expand">{row.email}</td>
              <td>{row.password}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditRow(row)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDeleteRow(row.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editing ? 'Edit Row' : 'Add Row'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={currentRow.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={currentRow.password}
                onChange={handleInputChange}
                placeholder="Enter password"
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" type="submit">
                {editing ? 'Update' : 'Add'}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default User;
