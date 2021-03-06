import faker from 'faker';

import { Mappable } from './Map';

class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number,
    lng: number,
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  htmlSummary(): string {
    return `${this.name}, ${this.catchPhrase}`;
  }
}

export default Company;