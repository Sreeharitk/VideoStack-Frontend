import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { addVedioApi } from "../apiService/allApis";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({updateData}) {
  //state to store input datas(add id key too)
  const [inputDatas,setInputDatas] = useState({
    id:"",title:"",coverImg:"",videoUrl:""
  })

  const setData = (e)=>{
    let {value,name} = e.target
    setInputDatas({...inputDatas,[name]:value})
  }

  const extractUrl = (e)=>{
    const {value,name} = e.target
    let finalUrl = `https://www.youtube.com/embed/${value.slice(-11,)}?autoplay=1`
    setInputDatas({...inputDatas,[name]:finalUrl})
  }

  // console.log(inputDatas);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    //reset the current data/state when clicked add or close button
    setInputDatas({...inputDatas,id:"",title:"",coverImg:"",videoUrl:""})
  }
  const handleShow = () => setShow(true);

  const handleAdd = async(e) =>{
    //preventing the event (ex:= from unlimited loops)
    e.preventDefault()//This only runs the event once when the button is clicked

    const {title,coverImg,videoUrl} = inputDatas

    if(!title || !coverImg || !videoUrl){
      toast.error("Please fill out every fields", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }else{
      const result = await addVedioApi(inputDatas)
      if(result.status >= 200 && result.status < 300){
        //updating state with added data
        updateData(result.data)

        toast.success("video added successfully", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        handleClose()
      }
    }

  }

  return (
    <div>
      <h1 role="button">
        <i
          onClick={handleShow}
          class="fa-solid fa-upload fa-beat-fade"
          style={{ color: "#fd6e00" }}
        ></i>
      </h1>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{ background: "#022140", color: "snow", borderBottom: "none" }}
        >
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#265077", color: "snow" }}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <FloatingLabel
                controlId="floatingInput"
                label="Video Caption"
                className="mb-3 text-black"
              >
                <Form.Control name="title" onChange={(e)=>setData(e)} type="text" placeholder="name@example.com" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <FloatingLabel
                controlId="floatingInput"
                label="Cover Image URL"
                className="mb-3 text-black"
              >
                <Form.Control name="coverImg" onChange={(e)=>setData(e)} type="text" placeholder="name@example.com" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <FloatingLabel
                controlId="floatingInput"
                label="YouTube Video URL"
                className="mb-3 text-black"
              >
                <Form.Control name="videoUrl" onChange={(e)=>extractUrl(e)} type="text" placeholder="name@example.com" />
              </FloatingLabel>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"#1e4258",borderTop:"none"}}>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor:"#fd6e00",color:"snow",borderColor:"#fd6e00"}}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>handleAdd(e)} style={{backgroundColor:"#ffd200",color:"black",borderColor:"#ffd200"}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </div>
  );
}

export default Add;
