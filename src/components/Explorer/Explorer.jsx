import { useState } from "react";
import "./explorer.css";

const Explorer = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="exp__container">
      <p className="exp__name" onClick={() => setShow(!show)}>
        <i
          className={`${
            data.isFolder ? "fa-solid fa-folder" : "fa-regular fa-file"
          }`}
        />
        {data.name}
      </p>

      <div className={`exp__details ${show && "show"}`}>
        {data.isFolder &&
          data.items.length > 0 &&
          data.items.map((item, i) => <Explorer key={i} data={item} />)}
      </div>
    </div>
  );
};

export default Explorer;
