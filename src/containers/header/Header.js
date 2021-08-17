import  './heade.scss'
import '../../responsibility/headerRes.scss'
import { Link } from 'react-router-dom'

import Arrow from '../../assets/icons/Union.svg'
import Korzina from '../../assets/icons/korzina.svg'
import RU from '../../assets/icons/RU.svg'
import UZ from '../../assets/icons/UZ.svg'
import User from '../../assets/icons/user.svg'
import Logo from '../../assets/images/logo.svg'
import Avatar from '../../assets/icons/avatar.svg'
import Hamb from '../../assets/icons/hamb.png'
import {Search} from '../../assets/icons/icons'
import { useState } from 'react'

import { Modal } from '../../pages'



const Header = ()=>{
    const addActive = () => { document.querySelector('.bla_bla').classList.add('active') }
    const addOne = () => { document.getElementById('one').classList.toggle('active') }
    const addTwo = () => { document.getElementById('two').classList.toggle('active') }
    const addThre = () => { document.getElementById('thre').classList.toggle('active')}
    const addFour = () => { document.getElementById('four').classList.toggle('active') }
    const addFive = () => { document.getElementById('five').classList.toggle('active') }
    const addSix = () => { document.getElementById('six').classList.toggle('active') }
    const modal_thre = (e) => {
        document.querySelector('.modal_thre').classList.add('active')
        e.preventDefault()
    }
    const modal_one = (e) => {
        document.querySelector('.modal_one').classList.add('active')
        document.querySelector('.modal_two').classList.remove('active')
        document.querySelector('.modal_thre').classList.remove('active')
        e.preventDefault()
    }
    const modal_two = (e) => {
        document.querySelector('.modal_one').classList.remove('active')
        document.querySelector('.modal_thre').classList.remove('active')
        document.querySelector('.modal_two').classList.add('active')
        e.preventDefault()
    }
    const [ humb_one, setHumbOne ] = useState(false)
    return (
        <header className="page_header">
        <Modal>
        <div className="modal_thre">
          <form action="" className="form_thre">
            <input placeholder="Ваш номер" type="text" name="" id="" />
            <input placeholder="Ваш пароль" type="password" name="" id="" />
            <button type="submit">АВТОРИЗАЦИЯ</button>

            <label htmlFor="parol">Забыли пароль?</label>
            <button  id="parol"
                onClick={modal_two}
            >ПОЛУЧИТЬ СМС ДЛЯ ВХОДА</button>
            <label htmlFor="reg">Нет аккаунта?</label>
            <button type="submit" id="reg">РЕГИСТРАЦИЯ</button>
          </form>
        </div>
      </Modal>

      <Modal>
        <div className="modal_two">
          <form form action = ""
          className = "form_two" >
            <input placeholder="Ваш имя" type="text" name="" id="" />
            <input placeholder="Ваш номер" type="password" name="" id="" />
            <button className="two_btn" type="submit">РЕГИСТРАЦИЯ ЧЕРЕЗ СМС-КОД</button>
            <button id="reg"
                onClick={modal_one}
            >РЕГИСТРАЦИЯ С ПАРОЛЕМ</button>
          </form>
        </div>
      </Modal>

      <Modal>
        <div className="modal_one">
          <form action="" className="form_one">
            <input placeholder="Ваш имя" type="password" name="" id="" />
            <input placeholder="Ваш номер" type="text" name="" id="" />
            <input placeholder="Ваш пароль" type="password" name="" id="" />

            <button type="submit" id="reg">РЕГИСТРАЦИЯ С ПАРОЛЕМ</button>
          </form>
        </div>
      </Modal>
            <div className="header_inner container">
                <div className="dropdawn_place">
                    <div className="for_men"
                    >
                            <div className="single_item">
                                <button onClick={addOne} className="dropdawn_name">ДЛЯ МУЖЧИН</button>
                                <img src={Arrow} alt="" />
                            </div>
                            <div className="open_drop" id="one">
                                <Link to="/formens" className="li_item">Рубашкиc</Link>
                                <Link to="" className="li_item">Свитшоты</Link>
                                <Link className="li_item">Джинсы</Link>
                            </div>
                    </div>
                    <div className="for_men">
                        <div className="single_item">
                            <button onClick={addTwo} className="dropdawn_name"> ДЛЯ ЖЕНЩИН</button>
                            <img src={Arrow} alt="" />
                        </div>
                        <div className="open_drop" id="two">
                            <Link className="li_item">Футболки</Link>
                            <Link className="li_item">Платья</Link>
                            <Link className="li_item">Джинсы</Link>
                        </div>
                    </div>
                    <div className="for_men">
                        <div className="single_item">
                            <button onClick={addThre} className="dropdawn_name">ДЛЯ ДЕТЕЙ</button>
                            <img src={Arrow} alt="" />
                        </div>
                        <div className="open_drop" id="thre">
                            <div className="li_item">
                                <div 
                                    className="child_single"
                                >
                                    <button onClick={addFour} className="dropdawn_name__two">Для мальчиков</button>
                                    <img src={Arrow} alt="" />
                                </div>
                                <div className="open_drop_two" id="four">
                                    <Link className="li_item">Футболки</Link>
                                </div>
                            </div>
                            <div className="li_item">
                                <div className="child_single"
                                    >
                                    <button onClick={addFive} className="dropdawn_name__two">Для девочек</button>
                                    <img src={Arrow} alt="" />
                                </div>
                                <div className="open_drop_two" id="five">
                                    <Link className="li_item">Платья</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="logo_place">
                        <Link className="logo" to="/">
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="mini_place">
                    <ul className="connect_place">
                        <li className={`bla_bla `}
                            onClick={addActive}
                        >
                            <input placeholder="Поиск" className="search_input" type="text" name="" id="" />
                            <span className="span_search">
                                <Search />
                            </span>
                        </li>
                        <li>
                            <Link className="korzinka"><img className="korzinka_img" src={Korzina} alt="" /></Link>
                        </li>
                        <li className="avatar_place">
                            <button className="user"
                                onClick={addSix}
                            >
                                <img className="korzinka_img" src={User} alt="" />
                            </button>
                            <div className="open_drop" id="six">
                                <div className="avatare"
                                    
                                >
                                    <img src={Avatar} alt="" />
                                    <a href="tel: 1234">+998-93-456-45-78</a>
                                </div>
                                <button style={{cursor: 'pointer'}} className="li_item"
                                    onClick={modal_thre}
                                >Профиль</button>
                                <Link className="li_item">Заказы</Link>
                                <Link className="li_item">Выйти</Link>
                            </div>

                        </li>
                        <li>
                            <select className="language" name="" id="">
                                <option style={
                                    {
                                        backgroundImage: `${UZ}`,
                                        color: 'red'
                                        
                                    }
                                    
                                } className="option" value="UZ">UZB</option>
                                <option style={
                                    {
                                        backgroundImage: `url("${RU}")`
                                    }
                                } className="option" value="RU">RUS</option>
                            </select>
                        </li>
                        <li className="humberger">
                                <button className="hamb_img"
                                    onClick = {() => setHumbOne(!humb_one)}
                                >
                                    <img src={Hamb} alt="" />
                                </button>
                                <div className = {`main_humb ${humb_one ? 'active' : ' '}`} >
                                    <div className="humb_men">
                                        <div className="open_humb">
                                        <span className="humb_name">ДЛЯ МУЖЧИН</span>
                                        </div>
                                        <div className="opened_humb">
                                            <Link to="/formens" className="humb_item">Рубашкиc</Link>
                                            <Link className="humb_item">Платья</Link>
                                            <Link className="humb_item">Джинсы</Link>
                                        </div>
                                    </div>
                                    <div className="humb_men">
                                        <div className="open_humb">
                                        <span className="humb_name">ДЛЯ ЖЕНЩИН</span>
                                        </div>
                                        <div className="opened_humb">
                                            <Link className="humb_item">Футболки</Link>
                                            <Link className="humb_item">Платья</Link>
                                            <Link className="humb_item">Джинсы</Link>
                                        </div>
                                    </div>
                                    <div className="humb_men">
                                        <div className="open_humb">
                                            <span className="humb_name">ДЛЯ ДЕТЕЙ</span>
                                        </div>
                                        <div className="opened_humb">
                                            <Link className="humb_item">Футболки</Link>
                                            <Link className="humb_item">Платья</Link>
                                            <Link className="humb_item">Джинсы</Link>
                                        </div>
                                    </div>
                                </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header