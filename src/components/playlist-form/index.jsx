import React, { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useSnackbar from "../../hooks/useSnackbar";

const PlaylistForm = ({ open, handleClose }) => {
  const [state, setState] = useState("");
  const [isError, setIsError] = useState(false);

  const { handleSnackbar, SnackbarComponent } = useSnackbar();

  const { getPlaylist } = useStoreActions((actions) => actions.playlists);
  const { data } = useStoreState((state) => state.playlists);

  const handleSubmit = () => {
    if (!state) {
      setIsError(true);
      handleSnackbar("Invalid Link or ID", "error");
    } else {
      const playlistId = state.match(/(?:list=)([\w-]+)/)?.[1] || state;
      // the regular expression above matches the playlist ID after "list="
      // if the link doesn't include "list=", it assumes the input is already a playlist ID

      if (data[playlistId]) {
        handleSnackbar("Playlist Already Exist!", "warning");
      } else {
        setIsError(false);
        getPlaylist(playlistId);
        setState("");
        handleClose();
        handleSnackbar("Playlist Added Successfully", "success");
      }
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a playlist, you should input here playlist link or id.
            Otherwise we can't provide you any playlist.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Playlist Link or ID"
            fullWidth
            error={isError}
            variant="standard"
            onChange={(e) => setState(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Playlist</Button>
        </DialogActions>
      </Dialog>
      <SnackbarComponent />
    </>
  );
};

export default PlaylistForm;
