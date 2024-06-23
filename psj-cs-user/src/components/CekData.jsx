import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function CekData() {
  return (
    <section className='container my-5 p-5'>
        <h3 className='text-dark fw-bold my-4'>Data Penghuni</h3>
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">Nama</th>
                <th scope="col">IDA FITRIA GANI</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Email</th>
                <td>123@gmail.com</td>
                </tr>
                <tr>
                <th scope="row">Cluster</th>
                <td>Valencia</td>
                </tr>
                <tr>
                <th scope="row">Blok</th>
                <td colspan="2">EE1</td>
                </tr>
                <tr>
                <th scope="row">No Rumah</th>
                <td colspan="2">01</td>
                </tr>
                <tr>
                <th scope="row">Biaya IPL</th>
                <td colspan="2">189.000</td>
                </tr>
            </tbody>
            </table>
    </section>
  )
}

export default CekData
