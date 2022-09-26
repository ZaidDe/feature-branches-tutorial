import { faker } from '@faker-js/faker';

export class User {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.id = faker.datatype.uuid();
    this.name = faker.name.fullName();
    this.location = {
      lat: Number(faker.address.latitude(35, 31, 4)),
      lng: Number(faker.address.longitude(75, 71, 4)),
    };
  }
}

// let user = new User();
// console.log(user);
