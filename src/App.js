/* eslint-disable jsx-a11y/alt-text */

import Hotels from "./Hotels.js";
import Menu from "./Menu.js";
import Timeline from "./Timeline.js";
export default function App() {
  // const [lang, setLang] = React.useState(navigator.language || "en");
  // const [openList, setOpenList] = React.useState(false);

  return (
    <div className="nariplusone">
      <div className="header">
        <div className="venueInfos">
          <div className="date">12072026 SUNDAY</div>
          <div className="address">D316 95270 ÉPINAY-CHAMPLÂTREUX</div>
          <div className="name">CHÂTEAU DE CHAMPLÂTREUX</div>
        </div>
        <Menu />
      </div>

      <Timeline />

      <div id="Hotels">
        <Hotels></Hotels>
      </div>
    </div>
  );
}
