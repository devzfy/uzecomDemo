import './formen.scss'
import Men_banner from '../../assets/images/man_banner.png'
import {
    Search
}from '../../assets/icons/icons'
import '../../responsibility/formenRes.scss'
import Arrow from '../../assets/icons/unik.svg'
import Slider from '@material-ui/core/Slider';
import { useState } from 'react';
import {
    Wear
}from '../index'
import { Products } from '../../Json/products';
import Filter from '../../assets/icons/filter.svg'
const Formen = ()=>{

    const addClassOne = ()=>{document.getElementById('class_one').classList.toggle('active')}
    const addClassTwo = () => { document.getElementById('class_two').classList.toggle('active') }
    const addClassThree = () => { document.getElementById('class_three').classList.toggle('active') }
    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function valuetext(value) {
        return `${value}°C`;
    }

    const [openFilter, setOpenFilter] = useState(false)

    const closeFilter = ()=>{
        document.querySelector('.filter').classList.remove('active')
    }
    return (
        <div className="for_men">
            <div className="top_banner"
                style={
                    {backgroundImage:`url(${Men_banner})`}
                }
            >
                <div className="container">
                    <h1 className="banner_name">NEW STYLE</h1>
                    <a className="banner_link" href>uzecom.com</a>
                </div>
            </div>

            <div className="page_name">
                <h1>РУБАШКИ</h1>
                <button className="open_filter"
                    onClick={()=> setOpenFilter(!openFilter)}
                >
                    <img src={Filter} alt="" />
                    <span>Фильтр</span>
                </button>
            </div>


            <div className="page_products_filters container">
                <div className={`filter ${openFilter ? 'active' : ' '}`}>

                    <div className="container">
                        <div className="input">
                            <input type="text" placeholder="Поиск..." name="" id="" />
                            <Search />
                        </div>
                        <div className="sort">
                            <select name="" id="">
                                <option value="">Сортиковка по</option>
                                <option value="">Item</option>
                            </select>
                        </div>

                        <div className="sort_by">
                            <div className="for_mens">
                                <div className="name"
                                    onClick={addClassOne}
                                >
                                    <h3>Для мужшин</h3>
                                    <img src={Arrow} alt="" />
                                </div>
                                <div className="open_sort" id="class_one">
                                    <span className="sort_name">- Рубашки</span>
                                    <span className="sort_name">- Свитшоты</span>
                                    <span className="sort_name">- Джинсы</span>
                                </div>
                            </div>
                            <div className="for_mens">
                                <div className="name"
                                    onClick={addClassTwo}
                                >
                                    <h3>Для женшин</h3>
                                    <img src={Arrow} alt="" />
                                </div>
                                <div className="open_sort" id="class_two">
                                    <span className="sort_name">- Рубашки</span>
                                    <span className="sort_name">- Свитшоты</span>
                                    <span className="sort_name">- Джинсы</span>
                                </div>
                            </div>
                            <div className="for_mens">
                                <div className="name"
                                    onClick={addClassThree}
                                >
                                    <h3>Для детей</h3>
                                    <img src={Arrow} alt="" />
                                </div>
                                <div className="open_sort" id="class_three">
                                    <span className="sort_name">- Рубашки</span>
                                    <span className="sort_name">- Свитшоты</span>
                                    <span className="sort_name">- Джинсы</span>
                                </div>
                            </div>
                        </div>

                        <div className="filter_size">
                            <div className="name">
                                <h1>Филтр по размером.</h1>
                                <hr />
                            </div>
                            <div className="radio_btns">
                                <ul>
                                    <li>
                                        <label for="muhRadio1">
                                            <input type="radio" name="muhRadio" value="" /> 
                                            <span>XS</span>
                                        </label>
                                    </li>
                                    <li><label for="muhRadio2"><input type="radio" name="muhRadio" value="" /> <span>S</span></label></li>
                                    <li><label for="muhRadio3"><input type="radio" name="muhRadio" value="" /> <span>L</span></label></li>
                                    <li><label for="muhRadio4"><input type="radio" name="muhRadio" value="" /> <span>M</span></label></li>

                                    <li>
                                        <label for="muhRadio4">
                                            <input type="radio" name="muhRadio" value="" />
                                            <span>XL</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="muhRadio5">
                                            <input type="radio" name="muhRadio" value="" />
                                            <span>XXL</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="diapazon_price">
                            <div className="name">
                                <h1>Диапазон цена</h1>
                                <hr />
                            </div>

                            <div className="range_place">
                                <Slider
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    getAriaValueText={valuetext}
                                    min = {50}
                                    max= {1000}
                                />
                            </div>
                        </div>

                        <div className="filter_size">
                            <div className="name">
                                <h1>Филтр по брендам.</h1>
                                <hr />
                            </div>
                            <div className="radio_btns">
                                <ul>
                                    <li>
                                        <label for="muhRadio1">
                                            <input type="radio" name="muhRadioOne" value="" />
                                            <span>Zara</span>
                                        </label>
                                    </li>
                                    <li><label for="muhRadio2"><input type="radio" name="muhRadioOne" value="" /> <span>Legendr</span></label></li>
                                    <li><label for="muhRadio3"><input type="radio" name="muhRadioOne" value="" /> <span>ABB</span></label></li>
                                    <li><label for="muhRadio4"><input type="radio" name="muhRadioOne" value="" /> <span>Navigator</span></label></li>

                                    <li>
                                        <label for="muhRadio4">
                                            <input type="radio" name="muhRadioOne" value="" />
                                            <span>TELFOR</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="muhRadio5">
                                            <input type="radio" name="muhRadioOne" value="" />
                                            <span>Wago</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="muhRadio6">
                                            <input type="radio" name="muhRadioOne" value="" />
                                            <span>UniVersal</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="buttons_del_fil">
                            <button className="delete_btn">Сбросить</button>
                            <button onClick={closeFilter} className="filter_btn">Фильтр</button>
                        </div>
                    </div>
                </div>
                <div className="products">
                    {
                        Products.map(item =>(
                             <div className="block_one">
                                    <Wear
                                        img={item.image}
                                        itemName={item.name}
                                        title={item.title}
                                        price={item.price}
                                        shop="Добавить в корзину"
                                        id={item.id}
                                        color_one = {item.color.color_one}
                                        color_two = {item.color.color_two}
                                        color_thre = {item.color.color_thre}
                                        color_four = {item.color.color_four}
                                    />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Formen