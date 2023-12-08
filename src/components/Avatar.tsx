import { ImgHTMLAttributes } from "react";

import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  // ?: = torna a propriedade opcional
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  //  const hasBorder = props.hasBorder != false;

  return (
    <>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        {...props}
      />
    </>
  );
}
