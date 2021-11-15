import { ParsedUser } from "./utils/Types";

export function ListElement(user: ParsedUser) {
  return (
    <div className="user-list-box">
      <img className="user-list-image" src={user.thumbnail} alt="" />
      <div className="user-list-data">
        <p className="user-list-name">
          {user.name.title} {user.name.first} {user.name.last}
        </p>
        <p className="user-list-username">{user.username}</p>
        <p className="user-list-email">{user.email}</p>
      </div>
    </div>
  );
}
