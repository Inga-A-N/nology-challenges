import style from './CardList.module.scss'
import Card from '../Card/Card'

const CardList = ({planets}) => {

    return (
        
        <section className={style.list}>
            {planets.map((planet, index) => (
                <Card key={index} planet={planet} />
            ))}
        </section>
    )
}
export default CardList