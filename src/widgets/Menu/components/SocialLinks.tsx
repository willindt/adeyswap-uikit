import React from "react";
import { SvgProps } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import Text from "../../../components/Text/Text";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { socials } from "../config";

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const SocialLinks: React.FC = () => (
  <div>
    {socials.map((social, index) => {
      const Icon = Icons[social.icon];
      const iconProps = { width: "30px", color: "text", style: { cursor: "pointer" } };
      // const mr = index < socials.length - 1 ? "24px" : 0;
      // if (social.items) {
      //   return (
      //     <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
      //       {social.items.map((item) => (
      //         <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
      //           {item.label}
      //         </Link>
      //       ))}
      //     </Dropdown>
      //   );
      // }
      return (
        <Link external key={social.label} href={social.href} aria-label={social.label} pt="5px">
          <Icon {...iconProps} mr="5px"/>
          <Text color="#fff" fontSize="16px">{social.label}</Text>
        </Link>
      );
    })}
  </div>
);

export default React.memo(SocialLinks, () => true);
