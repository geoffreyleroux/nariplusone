/* eslint-disable jsx-a11y/alt-text */

import Hotels from "./Hotels.js";
import Menu from "./Menu.js";
import Timeline from "./Timeline.js";
export default function App() {
  // const [lang, setLang] = React.useState(navigator.language || "en");
  // const [openList, setOpenList] = React.useState(false);

  return (
    <div className="nariplusone">
      <div className="header ">
        <Menu />
      </div>

      <Timeline  />

      <div id="Hotels">
        <Hotels></Hotels>
      </div>
    </div>
  );
}
