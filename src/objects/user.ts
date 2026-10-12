//budeme vytvaret tridu
//username atd jsou properties
//pak nastavime properties v konstruktoru. Parametry si vyzadaji data

export class User {
  readonly username: string; //readonly constanta, nemuze se menit a musi se hned priradit hodnota v construktoru
  password: string;
  age: number; //hned ve tride vidim co tam mame za data
  email: string;
  isActive = true;

  constructor(username: string, password: string, age: number, email: string) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.email = email;
    console.log(
      `Vytvoren uzivatel: ${this.username}, heslo: ${this.password}, vek: ${this.age}, je aktivni? ${this.isActive}, ma email: ${this.email}`,
    );
  }

  getUSername(): string {
    //metoda kterea nam vzdy bude vracet string
    return this.username;
  }

  logUser(): void {
    //tahle metoda nam nic nevraci
    console.log(
      `Informace o uzivatelu: ${this.username}, vek: ${this.age}, aktivovan: ${this.isActive}, email: ${this.email}`,
    );
  }

  setAge(newAge: number) {
    const oldAge = this.age;
    this.age = newAge;
    console.log(
      `Zmena veku uzivatele ${this.username} z ${oldAge} na ${this.age}`,
    );
  }

  getEmail(): string {
    return this.email;
  }
}
