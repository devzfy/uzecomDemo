import './footer.scss'
import '../../responsibility/footerRes.scss'

import FootLogo from '../../assets/icons/footLogo.png'
import Click from '../../assets/icons/click.png'
import Humo from '../../assets/icons/humo.png'
import Payme from '../../assets/icons/payme.png'
import Uzcard from '../../assets/icons/uzcard.png'
import Null1 from '../../assets/icons/Vectorr.svg'
import Null2 from '../../assets/icons/Vector1.svg'
import Null3 from '../../assets/icons/Vector2.svg'
import Facebook from '../../assets/icons/Vector3.svg'
import Instagram from '../../assets/icons/icon1.svg'
import Loca from '../../assets/icons/loca.svg'
import Top from '../../assets/icons/up.png'


const Footer = ()=>{
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer_one alone">
                        <img src={FootLogo} alt=""  className="logo_image"/>
                        <p className="footer-title">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        </p>
                    </div>
                    <ul className="footer_one alone">
                        <span>Связаться с нами</span>
                        <li className="center">
                            <img src={Null1} alt="" />
                            <a href="mailto: exampe@com">info@uzecom.com</a>
                        </li>
                        <li className = "center" >
                            <img src={ Null2} alt="" />
                            <a href="tel: 123">+99890 123 45 67</a>
                        </li>
                        <li>
                            <img src={ Loca} alt="" />
                            <a href>
                                Tashkent city, Almazar district, Sebzor Ts 17/18 dacha, 194 house
                            </a>
                        </li>
                    </ul>
                    <ul className="footer_one social_media">
                        <span>Социальные сети</span>
                        <div className="social">
                            <li><a href><img src={Instagram} alt="" /></a></li>
                            <li><a href><img src={Facebook} alt="" /></a></li>
                            <li><a href><img src={Null3} alt="" /></a></li>
                        </div>
                    </ul>
                    <ul className="footer_one alone_two"
                    >
                        <span>Cпособы оплаты</span>
                        <div className="payment">
                            <li><a href><img src={Humo} alt="" /></a></li>
                            <li><a href><img src={Click} alt="" /></a></li>
                            <li><a href><img src={Payme} alt="" /></a></li>
                            <li><a href><img src={Uzcard} alt="" /></a></li>
                        </div>
                    </ul>

                    <a href className="top_btn">
                        <img src={Top} alt="" />
                    </a>
                </div>
                <div className="footer-bottom">
                    <span className="copyright">© “Uzecom” Created by UMDSOFT development.2021</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer