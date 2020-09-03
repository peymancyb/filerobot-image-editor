import React, { useState } from "react";
import { render } from "react-dom";
import FilerobotImageEditor from "../../../projects/react";

const App = () => {
  // const src =
  //   "https://s3.amazonaws.com/memo-public/dev/order_default_images/f1e0b420-e60d-11ea-ad88-37627c014d8c.jpg";
  // const src =
  //   "https://s3.amazonaws.com/memo-public/prod/order_images/7cbaa590-e133-11ea-8214-63fb04ca56ba.png?version=mtvdbhfbt.jpg";
  // const src =
  //   "https://s3.amazonaws.com/memo-public/prod/order_images/59e92b30-e247-11ea-aeb3-5d0bab889498.png?version=9dpgp423i.jpg";
  const src =
    "https://s3.amazonaws.com/memo-public/prod/order_default_images/636b0990-ec41-11ea-9c50-158bc1582c5d.jpg";
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
          reduceBeforeEdit: {
            mode: "auto",
          },
        }}
      />
    </div>
  );
};

render(<App />, document.getElementById("app"));
