import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import "../styles/WatchTrailer.css";

export default function WatchTrailer({ trailer_id, handleOpen, handleClose }) {
  return (
    <div>
      <Dialog
        className="watch-trailer"
        fullWidth
        open={handleOpen}
        onBackdropClick={handleClose}
      >
        <DialogContent>
          <iframe
            allow="autoplay; encrypted-media"
            src={"https://www.youtube.com/embed/" + trailer_id + "?autoplay=1"}
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
