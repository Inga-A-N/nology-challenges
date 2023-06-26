import Card from '../Card/Card';
import s from './Main.module.scss';

const Main = (props) =>{
    let title = "React Challenge";

    return (
        <main className={s.main}>
      <h2 className={s.heading}>{title}</h2>
      
        <Card heading='first card' content='some content goes here' />
        <Card
          heading='second card'
          content='this text is completely different'
          hasButton
        />
      
    </main>
    );
};

export default Main;