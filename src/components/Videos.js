import React, { useEffect, useState } from 'react'
import VideoCard from "./VideoCard"
import { getVediosApi } from "../apiService/allApis"
import { Col, Row } from "react-bootstrap"

function Videos({data}) {

  const [allVideos,setAllVideos] = useState([])

  const [deleteUpdate,setDeleteUpdate] = useState({})

  const accessAllVideos = async() => {
    const result = await getVediosApi()
    setAllVideos(result.data)
  }

  useEffect(()=>{
    accessAllVideos()
  },[data,deleteUpdate])

  // console.log(allVideos);

  return (
    <Row className="gx-5" style={{overflowX:"hidden"}}>
        {
          allVideos?
            allVideos?.length>0?
              allVideos?.map(i=>(
                <Col lg={6} md={6} className="my-3">
                  <VideoCard video={i} delUpdate={setDeleteUpdate} />
                </Col>
              ))
            :<h1>Loading</h1>
          :<h1>No videos exists. Add some!</h1>
        }
    </Row>
  )
}

export default Videos