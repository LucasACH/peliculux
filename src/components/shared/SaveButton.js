import PropTypes from "prop-types";

import { IconButton, Tooltip } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

function SaveButton({ saved, onClick }) {
  return (
    <div className="save-button">
      {saved ? (
        <Tooltip title="Remove movie">
          <IconButton onClick={onClick}>
            <BookmarkIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Save movie">
          <IconButton onClick={onClick}>
            <BookmarkBorderIcon />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
}

SaveButton.propTypes = {
  saved: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default SaveButton;
