import './wear.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom'

const Wear = ({ img, itemName, title, price, shop, color_one, color_two, color_thre, color_four,id }) => {

    const config = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="products_overview">
            <Link className="single_wear" to={`/singleproduct/${id}`}>
                <div className="top_img">
                    <Slider {...config}>
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <div>
                            <img src={img} alt="" />
                        </div>
                    </Slider>
                </div>
                <div className="wear_info">
                    <h4 className="wear-name">{itemName}</h4>
                    <p className="wear-title">{title}</p>
                    <span className="wear-price">{`${price} cym`}</span>
                </div>
            </Link>
            <div className="color">
                    <input className="radio_one" type="radio" name="radio" id="one" value={color_one } />
                    <input className="radio_two" type="radio" name="radio" id="two" value={ color_two} />
                    <input className="radio_thre" type="radio" name="radio" id="thre" value={ color_thre} />
                    <input className="radio_four" type="radio" name="radio" id="four" value={ color_four} />
            </div>
            <button className="add_korzina">{shop}</button>
        </div>
    )
}

export default Wear