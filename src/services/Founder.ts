
export {};
export interface Product {
    id: number;
    name: string;
    description: string;
  }
export {};
export interface Founder {
    firstName: string;
    lastName: string;
    description: string;
    products: Product[];
  }