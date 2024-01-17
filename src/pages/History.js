import { Trash } from "feather-icons-react/build/IconComponents";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { delHistoryApi, getHistoryApi } from "../apiService/allApis";

function History() {

  const [history,setHistory] = useState({})

  const getHistoryData = async()=>{
    const result = await getHistoryApi()
    setHistory(result.data)
  }

  const deleteHistory = async(e,id)=>{
    e.preventDefault()
    await delHistoryApi(id)
    getHistoryData()
  }

  useEffect(()=>{
    getHistoryData()
  },[])

  return (
    <div style={{ backgroundColor: "#022140", marginBottom:"271px",marginTop:"50px"}}>
      <h1 className="text-center mb-5 mt-3" style={{ color: "#ffd200" }}>
        <span style={{ color: "#fd6e00" }}>Hist</span>ory
      </h1>
      <div style={{overflow:"auto"}}>
        <div style={{width: "100%", display: "table", tableLayout: "fixed"}}>
          <Table striped bordered hover variant="dark" className="container">
            <thead className="text-center">
              <tr>
                <th>id</th>
                <th>Video Title</th>
                <th>Video URL</th>
                <th>Date & Time</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
                history?.length>0?
                  history.map((i,index)=>(
                    <tr>
                      <td>{index+1}</td>
                      <td>{i?.title}</td>
                      <td>{i?.videoUrl}</td>
                      <td>{i?.time}</td>
                      <td><Trash onClick={(e)=>deleteHistory(e,i?.id)} style={{cursor:"pointer"}}></Trash></td>
                    </tr>
                  ))
                :<h1>So empty....</h1>
              }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default History;
