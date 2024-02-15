import axios from "axios";
import React, { useEffect, useState } from "react";
import "../pages/style/about.css";

const About = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "Error Founded");
        setLoading(false);
      });
  }, []);

  const deleteUser = (id) => {
    const confdelete = window.confirm("Are You Sure ?");
    if (confdelete) {
      axios
        .delete(`http://localhost:3000/delete/${id}`)
        .then((res) => {
          console.log("Deleted", res);
          window.location.reload();
        })
        .catch((err) => {
          console.log("Not Deleted", err);
        });
    } else {
      console.log("Not Deleted");
    }
  };

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        users.map((item) => (
          <div key={item._id} className="container">
            <div className="main">
              <h1>{item.name}</h1>
              <div className="btn-rgr">
                <button onClick={(e) => deleteUser(item._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default About;
