import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../api/axios";
interface SearchContextType {
  userData: GitHubUser;
  fetchIssues: (issue: string) => Promise<void>;
  issues: Issue[];
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

interface Issue {
  title: string;
  body: string;
  number: number;
  created_at: string;
}
export function SearchProvider({ children }: SearchProviderProps) {
  const [userData, setUserData] = useState({} as GitHubUser);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    fetchUserData();
    fetchIssues();
  }, []);

  async function fetchUserData() {
    const { data } = await api.get(`/users/${import.meta.env.VITE_USER_LOGIN}`);

    if (!data) {
      return;
    }

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

  const fetchIssues = useCallback(async (query = "") => {
    const response = await api.get(`search/issues`, {
      params: {
        q: query + ` repo:${import.meta.env.VITE_REPO_NAME}`,
      },
    });
    setIssues(response.data.items);
  }, []);

  return (
    <SearchContext.Provider value={{ userData, issues, fetchIssues }}>
      {children}
    </SearchContext.Provider>
  );
}
