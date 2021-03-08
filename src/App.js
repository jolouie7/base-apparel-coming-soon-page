import "./App.scss"

function App() {
  return (
    <>
      <header>
        <img src="/logo.svg" alt="company logo" />
      </header>
      <div>
        <img className="hero-img" src="/hero-mobile.jpg" alt="sample cloth" />
      </div>
      <main>
        <h1>
          <span>We're</span> <br /> coming <br /> soon
        </h1>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form>
          <input placeholder="Email Address" />
          <a href="#">
            <img className="form-img" src="icon-arrow.svg" alt="submit arrow" />
          </a>
        </form>
      </main>
    </>
  );
}

export default App;
