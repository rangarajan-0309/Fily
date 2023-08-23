import useLoginStore from "../components/store";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login  = useLoginStore((state: { login: any; })=>state.login);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(username, password);
      console.log("Login SuccessFul");
      let token:any= useLoginStore.getState().token;
      localStorage.setItem("token", token);
      window.location.href="/dashboard";
      }
      catch(error) {
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h1 className="mt-10 text-center text-2xl text-indigo-600 font-bold leading-tight text-primary">FILY</h1>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={username}
                autoComplete="username"
                required
                name="username"
                id="username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                autoComplete="current-password"
                required
                name="password"
                id="password"
                onChange={(event) => setPassword(event.target.value)} />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Log in
            </button>
          </div>
        </form>
      </div >
    </div >
  );
};
export default Login;