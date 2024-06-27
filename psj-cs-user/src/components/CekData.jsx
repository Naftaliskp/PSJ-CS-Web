// CekData.jsx
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

function CekData() {
  const [penghuni, setPenghuni] = useState(null);

  useEffect(() => {
    const fetchPenghuni = async () => {
      try {
        const response = await axios.get('/api/penghuni');
        setPenghuni(response.data);
      } catch (error) {
        console.error('Error fetching penghuni data:', error);
      }
    };

    fetchPenghuni();
  }, []);

  if (!penghuni) {
    return <div>Loading...</div>;
  }

  return (
    <section className='container my-5 p-5'>
      <h3 className='text-dark fw-bold my-4'>Data Penghuni</h3>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>Nama</th>
            <th scope='col'>{penghuni.nama}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>Email</th>
            <td>{penghuni.email}</td>
          </tr>
          <tr>
            <th scope='row'>Cluster</th>
            <td>{penghuni.cluster}</td>
          </tr>
          <tr>
            <th scope='row'>Blok</th>
            <td colspan='2'>{penghuni.blok}</td>
          </tr>
          <tr>
            <th scope='row'>No Rumah</th>
            <td colspan='2'>{penghuni.no}</td>
          </tr>
          <tr>
            <th scope='row'>Biaya IPL</th>
            <td colspan='2'>{penghuni.tagihan}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default CekData;


// import React from 'react'
// import { Table } from 'react-bootstrap'
// import { Link } from 'react-router-dom';

// function CekData() {
//   return (
//     <section className='container my-5 p-5'>
//         <h3 className='text-dark fw-bold my-4'>Data Penghuni</h3>
//         <table class="table table-hover">
//             <thead>
//                 <tr>
//                 <th scope="col">Nama</th>
//                 <th scope="col">IDA FITRIA GANI</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                 <th scope="row">Email</th>
//                 <td>123@gmail.com</td>
//                 </tr>
//                 <tr>
//                 <th scope="row">Cluster</th>
//                 <td>Valencia</td>
//                 </tr>
//                 <tr>
//                 <th scope="row">Blok</th>
//                 <td colspan="2">EE1</td>
//                 </tr>
//                 <tr>
//                 <th scope="row">No Rumah</th>
//                 <td colspan="2">01</td>
//                 </tr>
//                 <tr>
//                 <th scope="row">Biaya IPL</th>
//                 <td colspan="2">189.000</td>
//                 </tr>
//             </tbody>
//             </table>
//     </section>
//   )
// }

// export default CekData
