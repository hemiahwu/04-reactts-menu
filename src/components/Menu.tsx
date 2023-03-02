import { MenuItems } from "../types";

interface Props {
  items: MenuItems[];
}

export default ({ items }: Props) => {
  console.log(items);
  return <h2>菜谱内容</h2>;
};
