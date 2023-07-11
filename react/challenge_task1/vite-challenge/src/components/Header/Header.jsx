import styles from "./Header.module.scss"


const Header = ({heading, subheading}) => {
    
    return (
        <header className={"styles.header"}>
            <h1>{heading}</h1>
            <h2>{subheading}</h2>
        </header>
    );
};

export default Header;