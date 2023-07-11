import Card from "../Card/Card";
import s from "./Main.module.scss";

const Main = (props) => {
  return (
    <main className={s.main}>
      <Card
        heading="This is a title"
        subtitle="This is a subtitle"
        content="This is a short description"
        hasButton
      />
      <Card
        heading="This is a title"
        subtitle="This is a subtitle"
        content="This is a short description"
        hasButton
      />
      <Card
        heading="This is a title"
        subtitle="This is a subtitle"
        content="This is a short description"
        hasButton
      />
    </main>
  );
};

export default Main;
