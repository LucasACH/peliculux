import { Divider } from "@material-ui/core";
import React from "react";

import "../styles/ExtraInfo.css";

function ExtraInfo() {
  return (
    <div className="extra-info">
      <div className="status">
        <h4>Status</h4>
      </div>
      <Divider />
      <div className="budget">
        <h4>Budget</h4>
      </div>
      <Divider />
      <div className="revenue">
        <h4>Revenue</h4>
      </div>
      <Divider />
      <div className="keywords">
        <h4>Keywords</h4>
      </div>
      <div className="social-media">Social Media</div>
    </div>
  );
}

export default ExtraInfo;
