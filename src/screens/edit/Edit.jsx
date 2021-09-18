import React from "react";
import "../edit/Edit.css";

export default function Edit() {
  return (
    <div className="edit">
      <div className="img">
        <img
          src={
            "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png"
          }
          alt=""
        />
      </div>
      <div className="inputname">
        <input type="text" placeholder="Watch" />
        <textarea name="Text1" cols="40" rows="5"></textarea>
        <div className="inbutton">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}
