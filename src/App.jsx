import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import HomePage from "./components/pages/home-page";
import NotFound from "./components/not-found";
import PlayerPage from "./components/pages/player-page";
import Favorites from "./components/pages/favorite-page";
import Recents from "./components/pages/recent-page";
import VideoPlayer from "./components/video-player";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#92a68a",
        height: "100%",
        paddingBottom: "75rem",
      }}
    >
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/player/:playlistId" element={<PlayerPage />} />
          <Route path="/player/:playlistId/:index" element={<VideoPlayer />} />

          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recents" element={<Recents />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
