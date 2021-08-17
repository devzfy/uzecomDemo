import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  './home.scss'
import '../../responsibility/homeRes.scss'
import Slider from "react-slick";
import { Products } from "../../Json/products";

import Banner from '../../assets/images/banner.png'
import Image1 from '../../assets/images/image1.png'
import Image2 from '../../assets/images/image2.png'
import Image3 from '../../assets/images/image3.png'
import Image4 from '../../assets/images/image4.png'
import Image5 from '../../assets/images/image5.png'
import Image6 from '../../assets/images/image6.png'
import Image7 from '../../assets/images/image7.png'

import New1 from '../../assets/images/new1.png'
import New2 from '../../assets/images/new2.png'
import New3 from '../../assets/images/new3.png'
import New4 from '../../assets/images/new4.png'
import Banner1 from '../../assets/images/banner1.png'
import Banner2 from '../../assets/images/banner2.png'
import Banner3 from '../../assets/images/banner3.png'
import Vector from '../../assets/icons/Vector.svg'

import {Wear}from '../index'

const Home = ()=>{
    const config = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
    }

    const configTwo = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
             {
                 breakpoint: 500,
                 settings: {
                     slidesToShow: 4,
                     slidesToScroll: 1,
                     initialSlide: 2
                 }
             }
        ]
    }
    return(
        <div className="home-wrapper">
            <div className="hero-page">
                <Slider {...config}>
                    <div>
                        <img className="bane_img" src={Banner} alt="" />
                    </div>
                    <div>
                        <img className="bane_img" src={Banner} alt="" />
                    </div>
                    <div>
                        <img className="bane_img" src={Banner} alt="" />
                    </div>
                    <div>
                        <img className="bane_img" src={Banner} alt="" />
                    </div>
                </Slider>
            </div>

            <div className="brends">
                <div className="inner_brend container">
                    <div className="place_name"><h1>БРЕНДЫ</h1></div>
                    <Slider {...configTwo}>
                        <div className="brend_logo">
                            <img src={Image1} alt="" />
                            <span className="brend_name">Zara</span>
                        </div>
                        <div className="brend_logo">
                            <img src={Image2} alt="" />
                            <span className="brend_name">Nike</span>
                        </div>
                        <div className="brend_logo">
                            <img src={Image3} alt="" />
                            <span className="brend_name">Mac</span>
                        </div>
                        <div className="brend_logo">
                            <img src={Image4} alt="" />
                            <span className="brend_name">Vichy</span>
                        </div>
                        <div className="brend_logo">
                            <img src={Image5} alt="" />
                            <span className="brend_name">Clarins</span>
                        </div>
                        <div className="brend_logo">
                            <img src={Image6} alt="" />
                            <span className="brend_name">Elle</span>
                        </div>
                        <div className="brend_logo">
                            <img src={Image7} alt="" />
                            <span className="brend_name">Penti</span>
                        </div>

                        <div className="brend_logo">
                            <img src={Image6} alt="" />
                            <span className="brend_name">Elle</span>
                        </div>
                        <div className="brend_logo">
                            <img src={Image7} alt="" />
                            <span className="brend_name">Penti</span>
                        </div>
                    </Slider>
                </div>
            </div>

            <div className="new_collection">
                <div className="inner-collection container">
                    <div className="place_name">
                        <h1>НОВАЯ КОЛЛЕКЦИЯ</h1>
                    </div>

                    <div className="adds">
                        <div className="adds_item" style={{backgroundImage:`url(${New1})`}}><h3>Общее</h3></div>
                        <div className="adds_item" style={{ backgroundImage: `url(${New2})` }}><h3>Для женщин</h3></div>
                        <div className="adds_item" style={{ backgroundImage: `url(${New3})` }}><h3>Для мужчин</h3></div>
                        <div className="adds_item" style={{ backgroundImage: `url(${New4})` }}><h3>Для детей</h3></div>
                    </div>

                    <div className="mens_wear">
                        {
                            Products.slice(0, 4).map(item =>(
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

            <div className="brend_banner">
                <div className="container">
                    <div className="inner_brend-banner">
                        <div className="left-side">
                            <img src={Banner1} alt="" />
                            <img src={Banner2} alt="" />
                        </div>
                        <div className="right-side">
                            <img src={Banner3} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="dress">
                <div className="place_name container">
                    <h1>ХИТЫ ПРОДАЖ</h1>
                </div>
                <div className="inner_dress container">
                    {
                            Products.slice(5, 9).map(item =>(
                                <div className="block_one">
                                    <Wear
                                        img={item.image}
                                        itemName={item.name}
                                        title={item.title}
                                        price={item.price}
                                        shop="Добавить в корзину"
                                        id={item.id}
                                    />
                                </div>
                            ))
                        }
                </div>
            </div>

            <div className="button-again container">
                <button className="again_btn">
                    <img src={Vector} alt="" />
                    <span>Eщё</span>
                </button>
            </div>
        </div>
    )
}

export default Home