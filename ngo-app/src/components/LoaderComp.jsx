import { Bars } from "react-loader-spinner";
import "../styles/loader.css";

function LoaderComp() {
  return (
    <div className="myLoaderComp">
      <Bars color="brown" />
    </div>
  );
}

export default LoaderComp;
