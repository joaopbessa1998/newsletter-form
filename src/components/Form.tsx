import { useState, FormEvent } from "react";
import { User } from "../types/User";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Test");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="name">
          Name & Surname
        </label>
        <input
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          type="text"
          placeholder="John Doe"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          type="email"
          placeholder="johndoe@example.com"
        />
      </div>
      <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2">
          Read our terms
        </a>
        <div className="flex gap-2 items-center">
          <input type="checkbox" />
          <label className="text-sm" htmlFor="agree">
            I've read and agree
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white"
      >
        Subscribe
      </button>
    </form>
  );
};

export default Form;
