interface AnalyticDBProps {
  id: number;
  title: string;
  body: string;
  icon: string;
}

export const analyticDB: AnalyticDBProps[] = [
  {
    id: 1,
    title: "Better understand you customers",
    body: "Explain the features and what it acompolishes. What does your company offer that will improve or solve a problem?",
    icon: "/images/icon-4.svg",
  },
  {
    id: 2,
    title: "Improve acquisition",
    body: "Lacinia condimentum lectus dolor viverra nunc. Mauris quis condimentum orci. Curabitur hendrerit, felis vitae.",
    icon: "/images/icon-5.svg",
  },
  {
    id: 3,
    title: "Drive customer retention",
    body: "Curabitur quis purus congue ante interdum mattis sit amet at ante. Nulla volutpat, magna quis convallis tristique.",
    icon: "/images/icon-6.svg",
  },
];
