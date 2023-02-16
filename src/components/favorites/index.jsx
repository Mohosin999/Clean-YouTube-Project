import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Container } from "@mui/system";
import PlaylistCardItem from "../playlist-card-item";
import { Grid } from "@mui/material";

const Favorites = () => {
  const { data } = useStoreState((state) => state.playlists);
  const { items } = useStoreState((state) => state.favorites);
  const itemId = items[items.length - 1];

  // if (data[itemId]) {
  //   const obj = data[itemId];
  //   console.log(obj);
  // } else {
  //   console.log(null);

  const itemObj = data[itemId];
  const itemArray = Object.entries(itemObj);
  console.log(itemArray);

  // const { removeFromFavorite } = useStoreActions(
  //   (actions) => actions.favorites
  // );

  return (
    <div>
      {/* <Container maxWidth={"lg"} sx={{ marginTop: 12 }}>
        {itemArray.length > 0 && (
          <Grid container alignItems="stretch">
            {itemArray.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} mb={2}>
                <PlaylistCardItem
                  key={item.playlistId}
                  playlistId={item.playlistId}
                  playlistThumbnail={item.playlistThumbnail}
                  playlistTitle={item.playlistTitle}
                  channelTitle={item.channelTitle}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container> */}
    </div>
  );
};

export default Favorites;
