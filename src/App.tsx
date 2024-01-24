import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <h1 className="text-red-600">Sign up</h1>
      <p>Subscribe to our newsletter and stay informed</p>
      <div>
        <Form />
      </div>
      <p>
        By signing up you will receive our emails with the best tips, news and
        offers.
      </p>
    </div>
  );
}

export default App;
