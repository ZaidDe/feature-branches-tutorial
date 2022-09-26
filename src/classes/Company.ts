import { faker } from '@faker-js/faker';

export class Company {
  id: string;
  name: string;
  motto: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.id = faker.datatype.uuid();
    this.name = faker.company.name();
    this.motto = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude(35, 31, 4)),
      lng: Number(faker.address.longitude(75, 71, 4)),
    };
  }
}

// let Company = new Company();
// console.log(Company);
