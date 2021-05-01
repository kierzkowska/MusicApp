import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../quiz/Pagination";
import AdminUsers from "./AdminUserMap";

const AdminScores = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);
  
  const getUsers = () => {
    axios.get("http://localhost:5000/auth/all").then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  // pobieranie obecnych wynikow
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstTrack = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstTrack, indexOfLastUser);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className="musictitle">Spis użytkowników:</h1>
      <AdminUsers users={currentUsers} />

      <Pagination
        scoresPerPage={usersPerPage}
        totalScores={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default AdminScores;
