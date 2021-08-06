import PropTypes from "prop-types";

import { Dialog, DialogContent, IconButton, Tooltip } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useState } from "react";

import "../styles/YouTubeDialog.css";

function YouTubeDialog({ trailerId }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Tooltip title="Watch trailer">
        <IconButton onClick={handleOpen}>
          <YouTubeIcon />
        </IconButton>
      </Tooltip>

      <Dialog
        className="watch-trailer"
        fullWidth
        open={open}
        onBackdropClick={handleClose}
      >
        <DialogContent>
          <iframe
            allow="autoplay; encrypted-media"
            src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
            frameBorder="0"
            allowFullScreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
            title="video"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

YouTubeDialog.propTypes = {
  trailerId: PropTypes.string.isRequired,
};

export default YouTubeDialog;
