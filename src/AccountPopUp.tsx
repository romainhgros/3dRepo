import { getCountryName } from "./utils/ConvertCountryCode";
import { ParsedUser } from "./utils/Types";

export function AccountPopUp(user: ParsedUser) {
  const countryName = getCountryName(user.nat);
  return (
    <div className="current-account-box">
      <div className="current-account-content">
        <img className="current-account-image" src={user.large} alt="" />
        <p>
          Name: {user.name.title} {user.name.first} {user.name.last}
        </p>
        <p>Username: {user.username}</p>
        <p>Email address: {user.email}</p>
        <p>Age: {user.age}</p>
        <p>Country: {countryName}</p>
        <p className="current-account-behavior">Press anywhere to dismiss</p>
      </div>
    </div>
  );
}
