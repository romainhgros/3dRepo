interface Login {
  username: string;
}

interface Name {
  first: string;
  last: string;
  title: string;
}

interface Picture {
  large: string;
  thumbnail: string;
}

interface Dob {
  age: string;
}

export interface User {
  email: string;
  login: Login;
  name: Name;
  nat: string;
  picture: Picture;
  dob: Dob;
}

export interface FetchedData {
  results: User[];
  info: unknown;
}

export interface ParsedUser
  extends Pick<User, "email" | "name" | "nat">,
    Pick<Picture, "large" | "thumbnail">,
    Pick<Login, "username">,
    Pick<Dob, "age"> {}
