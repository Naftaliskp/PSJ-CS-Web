import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function Penghuni() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [currentRow, setCurrentRow] = useState({ id: null, email: '', nama: '', cluster: '', blok: '', noRumah: '', tagihanIPL: '' });
  const [editing, setEditing] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentRow({ ...currentRow, [name]: value });
  };

  const handleAddRow = () => {
    setData([...data, { ...currentRow, id: data.length + 1 }]);
    setCurrentRow({ id: null, email: '', nama: '', cluster: '', blok: '', noRumah: '', tagihanIPL: '' });
    handleClose();
  };

  const handleEditRow = (row) => {
    setCurrentRow(row);
    setEditing(true);
    handleShow();
  };

  const handleUpdateRow = () => {
    setData(data.map(row => (row.id === currentRow.id ? currentRow : row)));
    setCurrentRow({ id: null, email: '', nama: '', cluster: '', blok: '', noRumah: '', tagihanIPL: '' });
    setEditing(false);
    handleClose();
  };

  const handleDeleteRow = (id) => {
    setData(data.filter(row => row.id !== id));
  };

  return (
    <div className="container my-5">
      <Button variant="primary" onClick={handleShow}>Tambah Data Penghuni</Button>
      <table className="table mt-3 mb-5">
        <thead>
          <tr>
            <th>ID</th>
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
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.email}</td>
              <td className="expand">{row.nama}</td>
              <td>{row.cluster}</td>
              <td>{row.blok}</td>
              <td>{row.noRumah}</td>
              <td>{row.tagihanIPL}</td>
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
          <Form>
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
            <Form.Group className="mb-3" controlId="formNama">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={currentRow.nama}
                onChange={handleInputChange}
                placeholder="Enter nama"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCluster">
              <Form.Label>Cluster</Form.Label>
              <Form.Control
                type="text"
                name="cluster"
                value={currentRow.cluster}
                onChange={handleInputChange}
                placeholder="Enter cluster"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBlok">
              <Form.Label>Blok</Form.Label>
              <Form.Control
                type="text"
                name="blok"
                value={currentRow.blok}
                onChange={handleInputChange}
                placeholder="Enter blok"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNoRumah">
              <Form.Label>No Rumah</Form.Label>
              <Form.Control
                type="text"
                name="noRumah"
                value={currentRow.noRumah}
                onChange={handleInputChange}
                placeholder="Enter no rumah"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTagihanIPL">
              <Form.Label>Tagihan IPL</Form.Label>
              <Form.Control
                type="number"
                name="tagihanIPL"
                value={currentRow.tagihanIPL}
                onChange={handleInputChange}
                placeholder="Enter tagihan IPL"
                required
              />
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

export default Penghuni;

// import React from 'react'
// import { Link } from 'react-router-dom';
// import { Row, Col, Button } from 'react-bootstrap'
// import Office from '../assets/png/office.png'

// function BannerFeature() {
//   return (
//     <section className='container-fluid bg-danger bg-rain banner-feature py-3 mb-3'>
//       <Row className='d-flex justify-content-center col-11 mx-auto py-3 f-wrap'>
//             <Col xs='12' md='6'>
//                 <h3 className='text-light fw-bold my-3'>Selamat datang di situs resmi Penghuni Cluster Puri Surya Jaya! </h3>
//                 <h6 className='text-wrap text-light'> Kami hadir untuk memberikan kemudahan dan kenyamanan bagi seluruh penghuni melalui berbagai layanan digital yang dapat diakses dengan mudah. Di sini, Anda dapat: </h6>
//                 <p className='text-wrap text-light'> Cek IPL (Iuran Pengelolaan Lingkungan)</p>
//                 <p className='text-wrap text-light'> Form Pengaduan</p>
//                 <p className='text-wrap text-light'> Chatbot Customer Service</p>
//                 <h5 className='text-wrap text-light'>Mari bersama-sama menjadikan Cluster Puri Surya Jaya sebagai tempat tinggal yang nyaman dan harmonis.</h5>

//                 <Link to='/cek' className='btn btn-primary btn-md col-10 col-sm-6 col-md-6 mt-4'>Cek IPL</Link>
//             </Col>
//             <Col xs='12' md='6'>
//             <img className='rounded float-right' src={Office} />
//             </Col>
//         </Row>
//     </section>
//   )
// }

// export default BannerFeature
