export interface DrinkVariant {
  name: string;
  subtitle: string;
  description: string;
  themeColor: string;
}

export const drinks: DrinkVariant[] = [
  {
    name: "COORS",
    subtitle: "LIGHT",
    description: "Cold as the Rockies. Born in Golden, Colorado, Coors Light is brewed with pure Rocky Mountain water for a crisp, clean taste that refreshes like no other.",
    themeColor: "#7AB8E0",
  },
  {
    name: "COORS",
    subtitle: "BANQUET",
    description: "The one and only. Stubborn. Uncompromising. The beer that built Golden, Colorado — brewed with 100% Rocky Mountain water since 1873.",
    themeColor: "#D4A843",
  },
  {
    name: "COORS",
    subtitle: "PURE",
    description: "Organic and clean. Brewed with organic barley and no artificial flavors. Pure refreshment, nothing more, nothing less.",
    themeColor: "#82C9A1",
  },
];

function getBasePath(): string {
  if (typeof window === "undefined") return "";
  try {
    return (window as unknown as { __NEXT_DATA__: { basePath?: string } }).__NEXT_DATA__?.basePath || "";
  } catch {
    return "";
  }
}

export async function loadFramePaths(): Promise<string[]> {
  const base = getBasePath();
  const res = await fetch(`${base}/frames.json`);
  const paths: string[] = await res.json();
  return paths.map((p) => `${base}${p}`);
}

export const NAV_SECTIONS = [
  { id: "product", label: "Product" },
  { id: "ingredients", label: "Ingredients" },
  { id: "nutrition", label: "Nutrition" },
  { id: "reviews", label: "Reviews" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
] as const;
