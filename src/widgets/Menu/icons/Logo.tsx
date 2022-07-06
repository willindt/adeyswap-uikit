import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 200 50" {...props}>
        <image width="200" height="50" href={'/images/logo.png'}/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
