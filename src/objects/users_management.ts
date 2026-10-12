import { User } from "./user.ts";

const adminUSer = new User("admin", "123456", 27, "admin@admin.com");
adminUSer.logUser();
adminUSer.setAge(54);
console.log("Username admina: " + adminUSer.getUSername());
console.log("Email admina: " + adminUSer.getEmail());
