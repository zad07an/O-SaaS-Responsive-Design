import icon1 from "public/images/icon-1.svg";
import icon2 from "public/images/icon-2.svg";
import icon3 from "public/images/icon-3.svg";

interface IntroDBProps {
  id: number;
  title: string;
  body: string;
  icon: string;
}

export const introDB: IntroDBProps[] = [
  {
    id: 1,
    title: "Understand every step of the way",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, pulvinar ac iaculis vel, varius eu arcu tor vestibulum.",
    icon: icon1,
  },
  {
    id: 2,
    title: "Build faster with instant answers",
    body: "Lacinia condimentum lectus dolor viverra nunc. Mauris quis condimentum orci. Curabitur hendrerit, felis vitae.",
    icon: icon2,
  },
  {
    id: 3,
    title: "Unlock insights for everyone",
    body: "Curabitur quis purus congue ante interdum mattis sit amet at ante. Nulla volutpat, magna quis convallis tristique, purus mi sollicitudin sem.",
    icon: icon3,
  },
];
