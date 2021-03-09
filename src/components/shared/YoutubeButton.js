import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { IconButton, Tooltip } from "@material-ui/core";

function YoutubeButton() {
  return (
    <Tooltip title="Watch trailer">
      <IconButton className="save-button">
        <YouTubeIcon />
      </IconButton>
    </Tooltip>
  );
}

export default YoutubeButton;
