import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../api/axios";
interface SearchContextType {
  userData: GitHubUser;
}

export const SearchContext = createContext({} as SearchContextType);

interface SearchProviderProps {
  children: ReactNode;
}

interface GitHubUser {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
  html_url: string;
}
export function SearchProvider({ children }: SearchProviderProps) {
  const [userData, setUserData] = useState({} as GitHubUser);

  useEffect(() => {
    fetchUserData();
  }, []);

  async function fetchUserData() {
    const { data } = await api.get(`/users/${import.meta.env.VITE_USER_LOGIN}`);

    if (!data) {
      return;
    }

    console.log(data);

    setUserData({
      avatar_url: data.avatar_url,
      name: data.name,
      bio: data.bio,
      login: data.login,
      company: data.company,
      followers: data.followers,
      html_url: data.html_url,
    });
  }

  return (
    <SearchContext.Provider value={{ userData }}>
      {children}
    </SearchContext.Provider>
  );
}
