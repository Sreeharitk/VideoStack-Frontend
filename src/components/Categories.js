/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./categories.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addCategoryApi,
  delCategoryApi,
  getCategoryApi,
  getSingleVideoApi,
  updateCategoryApi,
} from "../apiService/allApis";
import { Trash2 } from "feather-icons-react/build/IconComponents";
import { Link } from "react-router-dom";

function Categories() {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setInputData({
      ...inputData,
      id: "",
      title: "",
      videos: [],
    });
  };
  const handleShow = () => setShow(true);

  //state for adding categories to frontend(storing)
  const [cateData, setCateData] = useState([]);

  //state to hold all datas
  const [inputData, setInputData] = useState({
    id: "",
    title: "",
    videos: [],
  });

  //deleting a category
  const deleteCategory = async (e, id) => {
    e.preventDefault();
    await delCategoryApi(id);
    await accessCategory();

    toast.success("category deleted successfully", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  //no need for this since theres only one input to pass and its done directly
  // const setData = (e) =>{
  //   let {value,name} = e.target
  //   setInputData({...inputData,[name]:value})
  // }

  const accessCategory = async () => {
    let results = await getCategoryApi();
    setCateData(results.data);
  };

  useEffect(() => {
    accessCategory();
  }, []);

  const handleCategory = async (e) => {
    e.preventDefault();
    const { title } = inputData;

    if (!title) {
      toast.error("Please fill the name field", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      const result = await addCategoryApi(inputData);

      if (result.status >= 200 && result.status < 300) {
        accessCategory();

        toast.success("category added successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        handleClose();
      }
    }
  };

  const draggingOver = (e) => {
    e.preventDefault();
    // console.log("dragging");
  };

  const dropped = async (e, id) => {
    // console.log("dropped with category"+id);
    const vidId = e.dataTransfer.getData("cardId");
    // console.log("dragged data is "+vidId);
    //accessing the dragged video from videoCard.js
    const result = await getSingleVideoApi(vidId);
    const video = result.data;

    //updating the category with newly dragged video
    const SelectedCategory = cateData.find((i) => i.id === id);
    //pushing the dragged video content into the selected category
    SelectedCategory.videos.push(video);
    //updating the backend with newly added category data(videos)
    await updateCategoryApi(id, SelectedCategory);
    //to add videos to category box when dropped we call the useEffect function here
    accessCategory();
  };

  return (
    <div className="ctm">
      <div className="ct1">
        <Button variant="primary" className="ct-b" onClick={handleShow}>
          Add Categories
        </Button>{" "}
        {cateData?.length > 0 ? (
          cateData?.map((i) => (
            <Link style={{textDecoration:"none"}} to={"/catupdate"}>
              <div
                droppable
                onDragOver={(e) => draggingOver(e)}
                onDrop={(e) => dropped(e, i?.id)}
                style={{
                  backgroundColor: "#fd6e00",
                  color: "snow",
                  marginTop: "10px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  padding: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4>{i.title}</h4>
                  <Trash2
                    onClick={(e) => deleteCategory(e, i?.id)}
                    style={{ color: "#f4f7fa", cursor: "pointer" }}
                  ></Trash2>
                </div>
                <marquee style={{display:"flex"}} className="catMovItems">
                  {
                    i?.videos.length>0&&(
                      i?.videos.map(j=>(
                        <img src={j?.coverImg} alt="" height="80px" width="80px" className="mx-1"/>
                      ))
                    )
                  }
                </marquee>
              </div>
            </Link>
          ))
        ) : (
          <h2>No Categories added yet</h2>
        )}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header
            closeButton
            style={{
              background: "#022140",
              color: "snow",
              borderBottom: "none",
            }}
          >
            <Modal.Title>Add New Category</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#265077", color: "snow" }}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Category Name"
                  className="mb-3 text-black"
                >
                  <Form.Control
                    onChange={(e) =>
                      setInputData({ ...inputData, title: e.target.value })
                    }
                    type="text"
                    placeholder="name@example.com"
                    name="title"
                  />
                </FloatingLabel>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer
            style={{ backgroundColor: "#1e4258", borderTop: "none" }}
          >
            <Button
              variant="secondary"
              onClick={handleClose}
              style={{
                backgroundColor: "#fd6e00",
                color: "snow",
                borderColor: "#fd6e00",
              }}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={(e) => handleCategory(e)}
              style={{
                backgroundColor: "#ffd200",
                color: "black",
                borderColor: "#ffd200",
              }}
            >
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Categories;
