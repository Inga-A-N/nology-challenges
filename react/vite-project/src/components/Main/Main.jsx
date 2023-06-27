import Card from '../Card/Card';
import FlexWrap from '../FlexWrap/FlexWrap';
import Main from './Main.module.scss';

const Content = (props) => {
  let title = 'Gallery';

  return (
    <main className={s.main}>
      <h2 className={s.heading}>{title}</h2>
      <FlexWrap>
        <Card heading='first card' content='some content goes here' />
        <Card
          heading='second card'
          content='this text is completely different'
          hasButton
        />
      </FlexWrap>
    </main>
  );
};

export default Main;
