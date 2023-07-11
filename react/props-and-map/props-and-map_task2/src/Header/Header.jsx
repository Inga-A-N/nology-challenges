import style from "./Header.module.scss";
const Header = ({ heading }) => {
  return (
    <header className={style.header}>
      <h1>{heading}</h1>
    </header>
  );
};

export default Header;
