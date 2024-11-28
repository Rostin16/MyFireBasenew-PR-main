import { addDoc, collection, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { db } from '../firebaseConfig';

function AddUser() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [editId, setEditId] = useState("");

  
  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };
    fetchData();
  }, []);
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId === "") {
        await addDoc(collection(db, "users"), user);
        console.log("Data added..");
      } else {
        await updateDoc(doc(db, "users", editId), {
          email: user.email,
          password: user.password,
        });
        setEditId("");
      }
      setUser({ email: "", password: "" }); 
      getData(); 
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      getData();
    } catch (error) {
      console.log(error);
    }
  };
 
  const handleEdit = (user) => {
    setUser(user);
    setEditId(user.id); 
  };

  const getData = async () => {
    try {
      const res = await getDocs(collection(db, "users"));
      const allData = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(allData);
      setData(allData); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow p-4 rounded">
              <Card.Body>
                <h3 className="text-center mb-4">User Login</h3>
                <Form onSubmit={handelSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      value={user.email || ""}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      onChange={(e) => setUser({ ...user, password: e.target.value })}
                      value={user.password || ""}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Submit
                  </Button>
                </Form>

                <table className="table table-striped table-hover mt-4">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((user) => (
                      <tr key={user.id}>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => handleEdit(user)}
                            className="btn btn-warning ms-2"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddUser;
