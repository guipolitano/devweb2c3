import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function MyTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((response) => response.json())
      .then((fetchData) => setData(fetchData));
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <tr>
            <td>{d.name}</td>
            <td>{d.email}</td>
            <td>{d.latitude}</td>
            <td>{d.longitude}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default MyTable;
