import "./styles/global.scss";
import "./styles/variables.scss";
import Input from "./components/Input/Input";

function App() {
  return (
    <main className="main">
      <section className="sectionMain">
        <figure>
          <img
            className="imgBackground"
            src="/images/bg-pattern-desktop.svg"
            alt="decoration"
          />
        </figure>
        <section className="section">
          <figure className="figure">
            <img
              className="imgLogo"
              src="/images/logo.svg"
              alt="Base Apparel logo"
            />
          </figure>

          <figure className="womenMobile">
            <img
              className="imgWomen"
              src="/images/hero-mobile.jpg"
              alt="women"
            />
          </figure>

          <h1 className="title">WE'RE</h1>

          <h2 className="subtitle">COMING SOON</h2>

          <p className="paragraph">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>

          <Input />
        </section>

        <section className="sectionWomen">
          <figure className="figureWomen">
            <img
              className="imgWomen"
              src="/images/hero-desktop.jpg"
              alt="women"
            />
          </figure>
        </section>
      </section>
    </main>
  );
}

export default App;
