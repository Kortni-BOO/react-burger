import costructorStyle from './BurgerConstructor.module.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import burgerImgBlue from '../../images/blueBurger.svg';
import sauce3 from '../../images/sauce-03.svg';
import meat from '../../images/meat-02.svg';
import mineral from '../../images/mineral-rings.svg';
import fruit from '../../images/fruit.svg';
import 'overlayscrollbars/overlayscrollbars.css';



function BurgerConstructor() {
    return (
    <section className={costructorStyle.section}>
        <div className={costructorStyle.scroll}>
        <div className={costructorStyle.items}>
            <div className={costructorStyle.item}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={burgerImgBlue}
                />
            </div>
            <div className={costructorStyle.item}>
                <div className={costructorStyle.op}><DragIcon type="primary" /></div>
                <ConstructorElement
                    text="Соус традиционный галактический"
                    price={50}
                    thumbnail={sauce3}
                />
            </div>
            <div className={costructorStyle.item}>
                <div className={costructorStyle.op}><DragIcon type="primary" /></div>
                <ConstructorElement
                    text="Мясо бессмертных моллюсков Protostomia"
                    price={50}
                    thumbnail={meat}
                />
            </div>
            <div className={costructorStyle.item}>
                <div className={costructorStyle.op}><DragIcon type="primary" /></div>
                <ConstructorElement
                    text="Плоды Фалленианского дерева"
                    price={50}
                    thumbnail={fruit}
                />
            </div>
            <div className={costructorStyle.item}>
                <div className={costructorStyle.op}><DragIcon type="primary" /></div>
                <ConstructorElement
                    text="Хрустящие минеральные кольца"
                    price={50}
                    thumbnail={mineral}
                />
            </div>
            <div className={costructorStyle.item}>
                <div className={costructorStyle.op}><DragIcon type="primary" /></div>
                <ConstructorElement
                    text="Хрустящие минеральные кольца"
                    price={50}
                    thumbnail={mineral}
                />
            </div>
            <div className={costructorStyle.item}>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={burgerImgBlue}
            />
            </div>
        </div>
        <div className={costructorStyle.form}>
            <div className={costructorStyle.price}>
                <p className="text text_type_digits-medium">610</p>
                <div style={{margin:'auto auto auto 9px'}}><CurrencyIcon type="secondary" /></div>
                
            </div>
            <div style={{margin:'0'}}><Button htmlType="button" type="primary" size="large">
                Оформить заказ
            </Button></div>
        </div>
        </div>
    </section>
    )
}

export default BurgerConstructor;