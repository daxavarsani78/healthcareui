import React, { useState } from "react";
import { getUserDetails } from "../utility/auth-guard/token-manager";
const UserContext = React.createContext();
const UserDispatchContext = React.createContext();

function UserProvider({ children }) {
	const user = getUserDetails();
	const [userDetails, setUserDetails] = useState(user);
	return (
		<UserContext.Provider value={userDetails}>
			<UserDispatchContext.Provider value={setUserDetails}>
				{children}
			</UserDispatchContext.Provider>
		</UserContext.Provider>
	);
}
export { UserProvider, UserContext, UserDispatchContext };
