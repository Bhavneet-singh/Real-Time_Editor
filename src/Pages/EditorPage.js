import React, { useState } from "react";

function EditorPage() {
  const [clients , setClients] = useState (); 

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 3, backgroundColor: "lightblue" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZsJPFj2qnnUa-3-gLZHKfc1IBs44uJ84fow&s"
          alt="Logo"
          class="h-24 w-auto mx-auto mb-8 mt-8"
        />

        <br></br>
        <h3 className="text-center text-xl font-bold"> Connected</h3>

        <div className=""> 

        </div>
      </div>
      <div style={{ flex: 7, backgroundColor: "lightcoral" }}></div>
    </div>
  );
}

export default EditorPage;
