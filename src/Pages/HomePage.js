import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [roomId, setRoomId] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const createNewRoomId = (e) => {
    e.preventDefault();
    const newRoomId = uuidV4();
    setRoomId(newRoomId);
    setUserName(userName);
    toast.success("New Room Created");
  };

  // Inside your HomePage component
  const navigate = useNavigate();

  const joinRoom = () => {
    if (!roomId || !userName) {
      toast.error("ROOM ID & USERNAME is required");
      return;
    }
    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
  };

  const handleInputEnter = (e) => {
    console.log("event", e.code);

    if (e.code == "Enter") {
      joinRoom();
    }
  };

  return (
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div class="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZsJPFj2qnnUa-3-gLZHKfc1IBs44uJ84fow&s"
          alt="Logo"
          class="h-24 w-auto mx-auto mb-8"
        />

        <h4 class="text-2xl font-bold text-gray-800 text-center mb-6">
          Paste Invitation Room Id
        </h4>

        <input
          type="text"
          placeholder="Room Id"
          class="w-full border border-gray-300 rounded-md px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          onChange={(e) => setRoomId(e.target.value)}
          value={roomId}
          onKeyUp={handleInputEnter}
        />

        <input
          type="text"
          placeholder="UserName"
          class="w-full border border-gray-300 rounded-md px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          onKeyUp={handleInputEnter}
        />

        <button
          onClick={joinRoom}
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded px-3 py-2 mt-4"
        >
          Join Room
        </button>

        <span className="font-semibold mt-4 block text-center">
          If you don't have an invite create &nbsp;
          <a
            onClick={createNewRoomId}
            href=""
            className="text-blue-500 underline"
          >
            New Room
          </a>
        </span>
      </div>
    </div>
  );
}

export default HomePage;
