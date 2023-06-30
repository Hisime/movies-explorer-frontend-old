import './Header.css';
import Logo from "../Logo/Logo";

function Header({isLogged}) {
    return (
        <header className={`header ${isLogged ? 'header--logged' : ''}`}>
            <div className="block-wrapper header__inner">
                <Logo/>
                {isLogged ?
                    <div className="header__right-part">
                        <ul className="header__navigation">
                            <li className="header__navigation-item"><a className="header__navigation-link header__navigation-link--active" href="#">Фильмы</a></li>
                            <li className="header__navigation-item"><a className="header__navigation-link" href="#">Сохранённые фильмы</a></li>
                        </ul>
                        <a href="#" className="header__account-link">
                            Аккаунт
                            <svg className="header__account-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="icon__COLOR:icon-main" fill-rule="evenodd" clip-rule="evenodd" d="M7.43004 7.96749C8.79146 7.40521 9.74951 6.06449 9.74951 4.5C9.74951 2.42893 8.07058 0.75 5.99951 0.75C3.92844 0.75 2.24951 2.42893 2.24951 4.5C2.24951 6.06451 3.20759 7.40525 4.56904 7.96751C3.17474 8.19979 1.89215 8.76573 0.808105 9.58019L2.18966 11.419C3.25095 10.6217 4.56849 10.1496 5.99961 10.1496C7.43073 10.1496 8.74828 10.6217 9.80957 11.419L11.1911 9.58019C10.107 8.7657 8.82439 8.19975 7.43004 7.96749Z" fill="black"/>
                            </svg>
                        </a>
                    </div>
                     :
                    <div className="header__login">
                        <a href="" className="header__link">Регистрация</a>
                        <a href="" className="header__button">Войти</a>
                    </div>}
            </div>
        </header>
    );
}

export default Header;
