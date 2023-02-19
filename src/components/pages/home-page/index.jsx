import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import PlaylistCardItem from "../../playlist-card-item";

const HomePage = ({ playlistArray }) => {
  return (
    <>
      <Container maxWidth={"lg"} sx={{ marginTop: 12 }}>
        {playlistArray.length > 0 && (
          <Grid container alignItems="stretch">
            {playlistArray.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} mb={2}>
                <PlaylistCardItem
                  key={item.playlistId}
                  playlistId={item.playlistId}
                  playlistThumbnail={item.playlistThumbnail}
                  playlistTitle={item.playlistTitle}
                  channelTitle={item.channelTitle}
                  path={"home"}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default HomePage;
