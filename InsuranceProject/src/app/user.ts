export class User {
  userId: string;
  name: string;
  surname: string;
  citizenId: string;
  email: string;
  password: string;
  tel: string;

  constructor(
    userId: string,
    name: string,
    surname: string,
    citizenId: string,
    email: string,
    password: string,
    tel: string
  ) {
    this.userId = userId;
    this.name = name;
    this.surname = surname;
    this.citizenId = citizenId;
    this.email = email;
    this.password = password;
    this.tel = tel;
  }
}
