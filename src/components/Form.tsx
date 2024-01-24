const Form = () => {
  return (
    <form>
      <div>
        <label>Name & Surname</label>
        <input type="text" placeholder="John Doe" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" placeholder="johndoe@example.com" />
      </div>
      <div>
        <a href="#">Read our terms</a>
        <div>
          <input type="checkbox" />
          <label>I've read and agree</label>
        </div>
      </div>
      <button>Subscribe</button>
    </form>
  );
};

export default Form;
