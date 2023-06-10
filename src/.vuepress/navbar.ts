import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "后端",
    icon: "/back/back.svg",
    prefix: "/back/",
    children: ["mybatis/"]
  },
  {
    text: "运维",
    icon: "/back/yunwei.svg",
    prefix: "/linux/",
    children: ["docker/"]
  }
]);
