import React, { useState } from "react";
import { render } from "react-dom";
import FilerobotImageEditor from "../../../projects/react";

const App = () => {
  const src =
    "https://s3.amazonaws.com/memo-public/dev/order_default_images/f1e0b420-e60d-11ea-ad88-37627c014d8c.jpg";
  const [show, toggle] = useState(false);

  return (
    <div>
      <h1>Filerobot Image Editor</h1>

      <img
        src={src}
        onClick={() => {
          toggle(true);
        }}
        alt="example image"
        style={{ maxWidth: "100%" }}
      />

      <FilerobotImageEditor
        show={show}
        src={src}
        onClose={() => {
          toggle(false);
        }}
        onOpen={() => console.log("Editor is opened.")}
        onComplete={(props) => {
          console.log(props);
        }}
        onBeforeComplete={(props) => {
          console.log(props);
          return false;
        }}
        config={{
          initialTab: "crop",
          tools: ["crop", "adjust", "effects", "filters", "rotate"],
          cropPresets: [],
          // hideTools: ['crop'],
          hideCancelButton: ["crop"],
        }}
      />
    </div>
  );
};

render(<App />, document.getElementById("app"));
