export interface ServicePrice {
  latam: number;
  es: number;
  us: number;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  slug: string;
  category: "app-development" | "web-design" | "marketing";
  description: string;
  url: string;
  features: string[];
  deliveryTime: string;
  price: ServicePrice;
  originalPrice?: ServicePrice;
  priceType: "from" | "fixed" | "monthly";
}
