import { useState } from "react";

import "./Penghuni.css";
import { Table } from "./dataPenghuni/PenghuniTable";
import { Modal } from "./dataPenghuni/PenghuniModal";

function Penghuni() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      email: "123@gmail.com",
      nama: "IDA FITRIA GANI",
      cluster: "Valencia",
      blok: "EE1",
      no: "01",
      tagihan: "189.000",
    },
    {
      email: "234@gmail.com",
      nama: "BAHARIWAN SIAGIAN",
      cluster: "Valencia",
      blok: "EE1",
      no: "03",
      tagihan: "184.000",
    },
    {
      email: "345@gmail.com",
      nama: "IWANSYAH SYAIFUL ALAM",
      cluster: "Valencia",
      blok: "EE1",
      no: "05",
      tagihan: "184.000",
    },
    {
      email: "456@gmail.com",
      nama: "HANA KUSTIANAH",
      cluster: "Valencia",
      blok: "EE1",
      no: "06",
      tagihan: "184.000",
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
    <div className="Penghuni">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Tambah Penghuni
      </button>
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
