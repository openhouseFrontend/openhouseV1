export type PropertyCard = {
  id: string;
  slug: string;
  title: string;
  city: string;
  priceLabel: string;
  coverImageUrl?: string;
};

export type PropertyDetail = PropertyCard & {
  description?: string;
  bedrooms?: number;
  bathrooms?: number;
};
