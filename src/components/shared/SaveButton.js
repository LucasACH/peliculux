import React from "react";

import { IconButton, Tooltip } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

function SaveButton() {
  return (
    <Tooltip title="Save movie">
      <IconButton className="save-button">
        <BookmarkBorderIcon />
      </IconButton>
    </Tooltip>
  );
}

export default SaveButton;
