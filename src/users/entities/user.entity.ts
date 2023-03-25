export default class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender?: string;
  dob?: Date;
  weight?: number;
  height?: number;
  createdAt: Date;
  updatedAt: Date;
  // habits: Habit[];

  constructor(userData: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender?: string;
    dob?: Date;
    weight?: number;
    height?: number;
    createdAt: Date;
    updatedAt: Date;
    // habits: Habit[];
  }) {
    this.id = userData.id;
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
    this.email = userData.email;
    this.password = userData.password;
    this.gender = userData.gender;
    this.dob = userData.dob;
    this.weight = userData.weight;
    this.height = userData.height;
    this.createdAt = userData.createdAt;
    this.updatedAt = userData.updatedAt;
    // this.habits = userData.habits;
  }
}
