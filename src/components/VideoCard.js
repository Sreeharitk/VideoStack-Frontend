import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { addHistoryApi, delVedioApi } from "../apiService/allApis";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from "date-fns";

function VideoCard({video,delUpdate}) {

  const deleteVideo = async(e,id) =>{
    e.preventDefault()
    const result = await delVedioApi(id)

    delUpdate(result.data)

    toast.success("video deleted successfully", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false, 
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const dragStart = (e,id) =>{
    // console.log(`dragging started and id is ${id}`);
    //store data until it is dragged and droped somewhere
    e.dataTransfer.setData("cardId",id)
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    //store history data
    const title = video?.title
    const videoUrl = video?.videoUrl
    const time = format(new Date(),"dd-mm-yyyy, h:mm a")
    const reqBody = {
      id:"",title,videoUrl,time
    }
    // console.log(reqBody);
    await addHistoryApi(reqBody)

  }
  return (
    <div>
      <Card 
        draggable
        onDragStart={(e)=>dragStart(e,video.id)}
        bg="dark"
        style={{ width: "18rem", color: "snow", textAlign: "center" }}
      >
        <Card.Img
          onClick={handleShow}
          height="150px"
          variant="top"
          src={video.coverImg}
        />
        <Card.Body>
          <Card.Title>{video.title}</Card.Title>
          <div style={{display:"flex",justifyContent:"end",cursor:"pointer"}}>
            <i onClick={(e)=>deleteVideo(e,video?.id)} class="fa-solid fa-trash" style={{color: "#f4f7fa"}}></i>
          </div>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="bg-dark text-light" style={{borderBottom:"none"}}>
          <Modal.Title style={{width:"100%",textAlign:"center"}}>{video.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
        <iframe width="100%" height="500" src={video.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </div>
  );
}

export default VideoCard;
