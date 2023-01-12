import { FC, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./auth/auth-provider";
import SignoutOidc from "./auth/SignoutOidc";
import userManager, { loadUser, signinRedirect } from "./auth/user-service";
import NoteList from "./notes/NoteList";

const App: FC<{}> = (): ReactElement => {
  loadUser();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => signinRedirect}>Login</button>
        <AuthProvider userManager={userManager}>
          <Routes>
            <Route path="/" element={<NoteList />} />
            <Route path="/signout-oidc" element={<SignoutOidc />} />
          </Routes>
        </AuthProvider>
      </header>
    </div>
  );
};

export default App;
