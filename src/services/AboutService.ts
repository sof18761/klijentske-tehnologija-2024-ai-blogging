import { Founder } from './Founder';

export{};
export class AboutService {
  private founders: Founder[] = [
    {
      firstName: "sofija",
      lastName: "turina",
      description: "sofija je osnivas AI bloga"
    },
    {
      firstName: "sara",
      lastName: "mrdakovic",
      description: "je glavni saradnik naseg bloga"
    }
  ];

  getFounders(): Founder[] {
    return this.founders;
  }
}