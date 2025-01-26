import { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();

    const loginData = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    };

    console.log(loginData);
  };

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full min-h-screen bg-slate-800 flex justify-center items-center">
      <div className="w-1/2 bg-slate-700 shadow-md rounded-md p-6">
        <form onSubmit={submitHandler} className="flex flex-col gap-3">
          <input
            type="text"
            value={formValues.name}
            name="name"
            onChange={handleInputChange}
            placeholder="Name"
            className="bg-slate-600 w-full py-2 px-3 text-white rounded-md text-lg focus:outline-slate-500 focus:outline-1"
          />
          <input
            type="email"
            value={formValues.email}
            name="email"
            onChange={handleInputChange}
            placeholder="Email"
            className="bg-slate-600 w-full py-2 px-3 text-white rounded-md text-lg focus:outline-slate-500 focus:outline-1"
          />
          <div className="flex items-center bg-slate-600 rounded-md">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formValues.password}
              name="password"
              onChange={handleInputChange}
              className="flex-1 py-2 px-3 text-white bg-transparent text-lg focus:outline-none"
            />
            <button
              type="button"
              className="px-3 text-white text-sm font-medium"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button className="bg-slate-300 rounded-md py-2 text-lg text-black font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
