import "../../../src/loader-style.css";
import { headerLogo } from "../../assets/images";

export function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-inner">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <img className="loader-icon tree-mask" src={headerLogo} alt="" />
      </div>
    </div>
  );
}

export default Loader;
