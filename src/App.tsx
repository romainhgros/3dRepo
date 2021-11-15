import { useState } from "react";
import "./App.css";
import useFetch from "react-fetch-hook";
import { ParsedUser, FetchedData } from "./utils/Types";
import { parseUser } from "./utils/ParseUser";
import { ListElement } from "./ListElement";
import { AccountPopUp } from "./AccountPopUp";

function App() {
  const { data } = useFetch<FetchedData>(
    "https://randomuser.me/api/?results=20&inc=picture,name,nat,login,email,dob"
  );

  const parsedUsers = parseUser(data?.results);

  const [shouldShow, toggleShow] = useState(false);
  const [currentUser, toggleCurrentAccount] = useState<ParsedUser>();

  return (
    <div className="App">
      {parsedUsers?.map((user, index) => (
        <div
          key={index}
          onClick={() => {
            toggleCurrentAccount(user);
            toggleShow(!shouldShow);
          }}
        >
          <ListElement {...user} />
        </div>
      ))}
      <div
        onClick={() => {
          toggleShow(!shouldShow);
        }}
      >
        {shouldShow && currentUser !== undefined ? (
          <AccountPopUp {...currentUser} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
