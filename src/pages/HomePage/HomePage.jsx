import css from "./HomePage.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function HomePage() {
  return (
    <>
      <PageTitle>Home</PageTitle>
      <div>
        <h1 className={css.homeSubtitle}>
          Keep your contacts safe and always at hand.
          <span className={css.homeSpan} role="img" aria-label="Telephone icon">
            📱
          </span>
        </h1>
      </div>
    </>
  );
}
