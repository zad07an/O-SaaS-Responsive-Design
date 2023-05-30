interface PricingDBProps {
  id: number;
  status: string;
  body: string;
  price: string;
  image: string;
}

export const pricingDB: PricingDBProps[] = [
  {
    id: 1,
    status: "ESSENTIAL",
    image: "/images/pricing-1.svg",
    price: "$79",
    body: `Unlimited projects
    Limited core reports
    60 day data history
    3 members / projects
    A/B Testing`,
  },
  {
    id: 2,
    status: "PREMIUM",
    image: "/images/pricing-2.svg",
    price: "$159",
    body: `Everything in Essential +
    Limited core reports
    12 month data history
    10 members / projects
    Unlimited saved reports
    Predictive analytics`,
  },
  {
    id: 2,
    status: "ENTERPRISE",
    image: "/images/pricing-3.svg",
    price: "$359",
    body: `Everything in Essential +
    Limited core reports
    12 month data history
    10 members / projects
    Unlimited saved reports
    Predictive analytics`,
  },
];
