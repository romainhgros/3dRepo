import { User, ParsedUser } from "./Types";

export function parseUser(users?: User[]) {
  const parsedUsers = users?.reduce<ParsedUser[]>(
    (parsedUsers, currentUser) => {
      const {
        email,
        name,
        nat,
        dob: { age },
        picture: { large, thumbnail },
        login: { username },
      } = currentUser;
      const parsedCurrentUser = {
        email,
        name,
        nat,
        large,
        thumbnail,
        username,
        age,
      };
      parsedUsers.push(parsedCurrentUser);
      return parsedUsers;
    },
    []
  );
  return parsedUsers;
}
