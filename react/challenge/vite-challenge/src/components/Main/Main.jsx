import s from './Main.module.scss';

const Main = (props) =>{
    let title = "React Challenge";

    return (
        <main className={s.main}>
      <h2 className={s.heading}>{title}</h2>
      
              
    </main>
    );
};

export default Main;