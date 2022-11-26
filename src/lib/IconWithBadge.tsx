import React from "react";
interface IconProps {
  color: string
}

interface IconWithBadgeProps {
  icon: React.JSXElementConstructor<IconProps>;
  number: number;
  iconProps: IconProps;
}

function IconWithBadge({ icon, number }: IconWithBadgeProps) {
  return <div>{React.createElement(icon, {})}</div>;
}

export default IconWithBadge;
