import { Founder } from './Founder';

export{};
export class AboutService {
  private founders: Founder[] = [
    {
      firstName: "sofija",
      lastName: "turina",
      description: "sofija je osnivac AI bloga",
      products: [
        { id: 1, name: "AI Analiticar", description: "dipl. inz. org. nauka" },
        { id: 2, name: "magistar vestacke inteligencije", description: "master na FON-u" }
      ]
    },
    {
      firstName: "sara",
      lastName: "mrdakovic",
      description: "je glavni saradnik naseg bloga",
      products: [
        { id: 3, name: "AI konsultant", description: "dipl. ekonomista" },
        { id: 4, name: "magistar ekonomskih nauka", description: "master na Ekonomskom fakultetu" }
      ]
    }
  ];

  getFounders(): Founder[] {
    return this.founders;
  }
}