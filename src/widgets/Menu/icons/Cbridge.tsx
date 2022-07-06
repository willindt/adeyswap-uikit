import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 50 50" width="50px" {...props}>
      <image width="50" height="50" href={'/images/icons/bridge.svg'}/>
    </Svg>
  );
};

export default Icon;
