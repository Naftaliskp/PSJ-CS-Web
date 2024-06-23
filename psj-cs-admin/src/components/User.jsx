// import { useState } from "react";

// import "./User.css";
// import { Table } from "./user/UserTable";
// import { Modal } from "./user/UserModal";

// function User() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [rows, setRows] = useState([
//     {
//       email: "123@gmail.com",
//       password: "123abc",      
//     },
//     {
//       email: "321@gmail.com",
//       password: "321abc",      
//     },
//   ]);
//   const [rowToEdit, setRowToEdit] = useState(null);

//   const handleDeleteRow = (targetIndex) => {
//     setRows(rows.filter((_, idx) => idx !== targetIndex));
//   };

//   const handleEditRow = (idx) => {
//     setRowToEdit(idx);

//     setModalOpen(true);
//   };

//   const handleSubmit = (newRow) => {
//     rowToEdit === null
//       ? setRows([...rows, newRow])
//       : setRows(
//           rows.map((currRow, idx) => {
//             if (idx !== rowToEdit) return currRow;

//             return newRow;
//           })
//         );
//   };

//   return (
//     <div className="User">
//       <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
//       <button onClick={() => setModalOpen(true)} className="btn">
//         Tambah User
//       </button>
//       {modalOpen && (
//         <Modal
//           closeModal={() => {
//             setModalOpen(false);
//             setRowToEdit(null);
//           }}
//           onSubmit={handleSubmit}
//           defaultValue={rowToEdit !== null && rows[rowToEdit]}
//         />
//       )}
//     </div>
//   );
// }

// export default User;

// // import React from 'react'
// // import { Link } from 'react-router-dom';
// // import { Row, Col, Button } from 'react-bootstrap'
// // import Office from '../assets/png/office.png'

// // function BannerFeature() {
// //   return (
// //     <section className='container-fluid bg-danger bg-rain banner-feature py-3 mb-3'>
// //       <Row className='d-flex justify-content-center col-11 mx-auto py-3 f-wrap'>
// //             <Col xs='12' md='6'>
// //                 <h3 className='text-light fw-bold my-3'>Selamat datang di situs resmi Penghuni Cluster Puri Surya Jaya! </h3>
// //                 <h6 className='text-wrap text-light'> Kami hadir untuk memberikan kemudahan dan kenyamanan bagi seluruh penghuni melalui berbagai layanan digital yang dapat diakses dengan mudah. Di sini, Anda dapat: </h6>
// //                 <p className='text-wrap text-light'> Cek IPL (Iuran Pengelolaan Lingkungan)</p>
// //                 <p className='text-wrap text-light'> Form Pengaduan</p>
// //                 <p className='text-wrap text-light'> Chatbot Customer Service</p>
// //                 <h5 className='text-wrap text-light'>Mari bersama-sama menjadikan Cluster Puri Surya Jaya sebagai tempat tinggal yang nyaman dan harmonis.</h5>

// //                 <Link to='/cek' className='btn btn-primary btn-md col-10 col-sm-6 col-md-6 mt-4'>Cek IPL</Link>
// //             </Col>
// //             <Col xs='12' md='6'>
// //             <img className='rounded float-right' src={Office} />
// //             </Col>
// //         </Row>
// //     </section>
// //   )
// // }

// // export default BannerFeature


import { useState } from "react";

import "./User.css";
import { Table } from "./user/UserTable";
import { Modal } from "./user/UserModal";

function User() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      email: "123@gmail.com",
      password: "123abc",      
    },
    {
      email: "321@gmail.com",
      password: "321abc",      
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
    <div className="User">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Tambah User
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null ? rows[rowToEdit] : { email: "", password: "" }}
        />
      )}
    </div>
  );
}

export default User;
