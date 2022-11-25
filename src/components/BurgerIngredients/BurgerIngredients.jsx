import burgerStyle from './BurgerIngredients.module.css';
import burgerImgBlue from '../../images/blueBurger.svg';
import burgerImgRed from '../../images/redBurger.svg';
import sauceSpicyX from '../../images/sauceSpicy-X.svg';
import sauceFirm from '../../images/sauceFirm.svg';
import sauce3 from '../../images/sauce-03.svg';
import sauce4 from '../../images/sauce-04.svg';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import 'overlayscrollbars/overlayscrollbars.css';
import data from '../../utils/data';

//src/images/bun-02.png
function BurgerIngredients() {
    console.log(data[0]);

    return (
        <section className={burgerStyle.section}>
            <h1>Соберите бургер</h1>
            <div className={burgerStyle.menu}>
                <p className={burgerStyle.textactive}>Булки</p>
                <p className={burgerStyle.text}>Соусы</p>
                <p className={burgerStyle.text}>Начинки</p>
            </div>
            <div className={burgerStyle.scroll}>
            <div className={burgerStyle.container}>
                <p className={burgerStyle.name}>Булки</p>
                <div className={burgerStyle.ingredients}>
                    {data.map((item) => (
                        <div className={burgerStyle.ingredient} key={item._id}>
                        <Counter count={1} size="default" extraClass="m-1" />
                            <img alt='burger blue' src={item.image}/>
                            <p>
                                <span>{item.price}</span>
                                <CurrencyIcon type="secondary" />
                            </p>
                            <p>{item.name}</p>
                    </div>
                    ))}
                    
                </div>
            </div>
            </div>

        </section>
    );
}

export default BurgerIngredients;