import { list, check, todo, home, help } from "./icons";

const menu = [
  {
    id: 1,
    title: "All Tasks",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Important!",
    icon: list,
    link: "/important",
  },
  {
    id: 3,
    title: "Completed!",
    icon: check,
    link: "/completed",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: todo,
    link: "/incomplete",
  },
  {
    id: 5,
    title: "How This Works",
    icon: help,
    link: "/how",
  },
];

export default menu;
