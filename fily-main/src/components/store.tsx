import create from "zustand";

interface LoginState {
  username: string;
  password: string;
}

interface LoginStore extends LoginState {
  token:String | null;
  login: (username: string, password: string) => Promise<void>;
}

const useLoginStore = create<LoginStore>((set) => ({
  token:null,
  username: "",
  password: "",
  login: async (username, password) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        const token = data.token;
        set({ token });
      } else {
        throw new Error("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}));

export default useLoginStore;