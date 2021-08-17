import './singlewear.scss'
import '../../responsibility/singleRes.scss'
import Banner from '../../assets/images/singleBg.png'
import Wear from '../../components/SingleWear/Wear'
import Mnus from '../../assets/images/minus.png'
import Plus from '../../assets/images/plus.png'
import { useState } from 'react'
import Shirt1 from '../../assets/images/shirt1.png'
import Shirt2 from '../../assets/images/shirt2.png'
import Shirt3 from '../../assets/images/shirt3.png'
import { Products } from '../../Json/products'
import { useEffect } from 'react'
const SingleWear = ({match})=>{
      
    const [ price, setPrice ] = useState(1)
    const [data, setData ] = useState([])
    const [color, setColor] = useState('Bыберите цвет ')
    const [length, setLenght] = useState('Bыберите pазмер ')
    const decrement = ()=>{
        if(price > 1){
            setPrice (price - 1)
        }
    }
    useEffect(() => {
        const filteredProduct = Products.filter(product => product.id === parseInt(match.params.id))
        setData(filteredProduct)
    },[match.params.id])
    const [images, setImage] = useState(Shirt1)
return (
<div className="single_wear">
    <div className="banner_single" style={ {backgroundImage: `url(${Banner})`} }>
    </div>

    <div className="container">
        <div className="inner_banner">
            <div className="bread_link"></div>

            <div className="page_name">
                <h1 className="page_name_title">БАЗОВАЯ РУБАШКА </h1>
            </div>

            <div className="page_products">
                <div className="product_full--info">
                    {
                        data.map(item => ( 
                        <>
                    <div className="left_part">
                            <div className="mini-images">
                                <button onClick={() => setImage(Shirt1)}><img src={Shirt1} alt="" /></button>
                                <button onClick={() => setImage(Shirt2)}><img src={Shirt2} alt="" /></button>
                                <button onClick={() => setImage(Shirt3)}><img src={Shirt3} alt="" /></button>
                                <button onClick={() => setImage(Shirt2)}><img src={Shirt2} alt="" /></button>
                            </div>
                        <div className="main_img">
                            <img src={images} alt="" />
                        </div>
                    </div>
                    <div className="right_part">
                        
                                    <div className="product_brend">
                            <h1 className="brend_name">{item.name} РУБАШКА</h1>

                        </div>
                        <div className="product_informatio">
                            
                                        <div className="top_info">
                                <div className="left_info">
                                    <h2 className="prod_id">SKU: <span className="id_numb">685813</span></h2>
                                    <h2 className="prod_id">Посадка: <span className="id_numb">высокая посадка</span>
                                    </h2>
                                </div>

                                <div className="left_info">
                                    <h2 className="prod_id">Крой: <span className="id_numb">средняя посадка</span></h2>
                                    <h2 className="prod_id">Состав: <span className="id_numb">100% хлопок</span></h2>
                                </div>
                            </div>

                            <p className="prod_over">
                                Рубашка с контрастным дизайном Свитшот из мягкого футера. Довольно свободная модель с
                                заниженной линией плеча. Рельефная трикотажная резинка по горловине, низу рукавов и
                                нижнему краю.
                            </p>

                            <div className="prod_price_stock">
                                <div className="product_price">
                                    <span className="prod_sena">Цена:</span>
                                        <span className="prod_sena alone">{price * item.price} cум</span>
                                </div>

                                <div className="product_number">
                                    <h2 className="stock_numb">Количество:</h2>
                                    <div className="minu_plus">
                                        <button className="minus"
                                                onClick={decrement}
                                        >
                                            <img src={Mnus} alt="" />
                                        </button>
                                            <span className="number">{price} шт</span>
                                        <button className="plus"
                                                onClick={() => setPrice(price + 1)}
                                        >
                                            <img src={Plus} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="product_color">
                                <h2 className="color">Цвет: <span className="color">{color}</span></h2>
                                <div className="radio_btns">
                                    <input className="radio_one" type="radio" name="color" id="ones" value={item.color.color_one}  onClick={()=>setColor(item.color.color_one)}/>
                                    <input className="radio_two" type="radio" name="color" id="twos"  value={item.color.color_two}  onClick={()=>setColor(item.color.color_two)}/>
                                    <input className="radio_thre" type="radio" name="color" id="thres"  value={item.color.color_thre}  onClick={()=>setColor(item.color.color_thre)}/>
                                    <input className="radio_four" type="radio" name="color" id="fours"  value={item.color.color_four}  onClick={()=>setColor(item.color.color_four)}/>
                                </div>
                            </div>

                            <div className="product_color alone_btns">
                                <h2 className="color">Размер: <span className="color">{length}</span></h2>
                                <div className="radio_btns">
                                    <input type="radio" name="colors" id="oness" value={item.length.long_one}  onClick={()=>setLenght(item.length.long_one)}/>
                                    <label htmlFor="oness">XS</label>
                                    <input type="radio" name="colors" id="twoss" value={item.length.long_two}  onClick={()=>setLenght(item.length.long_two)}/>
                                    <label htmlFor="twoss">S</label>
                                    <input type="radio" name="colors" id="thress" value={item.length.long_thre}  onClick={()=>setLenght(item.length.long_thre)}/>
                                    <label htmlFor="thress">M</label>
                                    <input type="radio" name="colors" id="fourss" value={item.length.long_four}  onClick={()=>setLenght(item.length.long_four)}/>
                                    <label htmlFor="fourss">L</label>
                                    <input type="radio" name="colors" id="fivess" value={item.length.long_five}  onClick={()=>setLenght(item.length.long_five)}/>
                                    <label htmlFor="fivess">XL</label>
                                    <input type="radio" name="colors" id="sixss" value={item.length.long_six}  onClick={()=>setLenght(item.length.long_six)}/>
                                    <label htmlFor="sixss">XXL</label>
                                </div>
                            </div>

                            <div className="shop_btn">
                                <button>КУПИТЬ</button>
                            </div>
                        </div>
                        
                            </div>
                                </>
                            ))
                        }
                </div>

                <div className="you_may">
                    <div className="top_may">
                        <h1>ПОХОЖИ ТОВАРЫ</h1>
                    </div>

                    <div className="likes_products">
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
        </div>
    </div>
</div>
)
}

export default SingleWear