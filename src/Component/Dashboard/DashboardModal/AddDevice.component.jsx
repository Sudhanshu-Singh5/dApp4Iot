import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function AddDeviceModal({
  onDeviceAdd,
  setIsAddDeviceModalOpen,
  isHLActive
}) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  return (
    <div
      style={{
        height: "400px",
        width: "20%",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        color: "black",
        justifyContent: "space-between",
        alignItems: "center",
        border: '1px solid black',
        backdropFilter: 'Blur(10px)'
      }}
      >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <span style={{ marginTop: "20px" }}>Device Name</span>
        <TextField
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {isHLActive ? '' : <span>
          HL is inactive cannot perform chain operations
          </span>}      
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <span style={{ marginTop: "20px" }}>Device Id</span>
        <TextField value={id} onChange={(event) => setId(event.target.value)} />
      </div>
      <div>
        <Button
          onClick={() => {
            onDeviceAdd({ name: name });
            setIsAddDeviceModalOpen(false);
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
