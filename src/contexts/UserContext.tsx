import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Router, { useRouter } from "next/router";

type User = {
  name: string;
  email: string;
};

type UserContextType = {
  user: User;
  aceite: () => Promise<void>;
  modifyMenu: () => void;
  menuOpen: boolean;
};

export const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: any) {
  const { data: session } = useSession();
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [acceptTerm, setAcceptTerm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true)

  const router = useRouter();

  function verifyLogin() {
    if (!session) Router.push("/");
  }

  function verifyAccept() {
    if (!!session && !acceptTerm) Router.push("/termos");
  }

  async function userPersist() {
    !!session?.user?.name && !!session?.user?.email && setUser({
      name: session.user.name,
      email: session.user.email,
    });
  }

  async function aceite() {
    setAcceptTerm(true);
    Router.push("/dashboard");
  }

  function modifyMenu() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    userPersist();
    verifyLogin()
  }, [session]);

  useEffect(() => {
    verifyAccept();
  }, [router.asPath]);

  return (
    <UserContext.Provider value={{ user, aceite, modifyMenu, menuOpen }}>
      {children}
    </UserContext.Provider>
  );
}
