import { faker } from "@faker-js/faker";

export function generateMockData() {
  return Array.from({ length: 15 }, () => ({
    id: faker.string.uuid(),
    image: faker.image.avatar(),
    name: faker.person.firstName(),
    message: faker.lorem.sentence(),
    time: faker.date
      .recent()
      .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  }));
}
