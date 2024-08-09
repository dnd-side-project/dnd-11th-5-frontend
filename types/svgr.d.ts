declare module "*.svg" {
  import { FC } from "react";
  const svg: FC<SVGProps<SVGSVGElement>>;
  export default svg;
}
