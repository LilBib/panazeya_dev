import logo from "../images/search-block_logo.svg";
import magnifier from "../images/magnifier.svg";
import DoctorBrief from "./DoctorBrief";
import doc1 from "../images/doc1.png";
import doc2 from "../images/doc2.png";
import doc3 from "../images/doc3.png";

function Main (props) {
    return (
        <div className="main">
            <section className="main__search-block">
                <img src={logo} alt="надпись: что болит?" />
                <div className="main__search-line">
                    <input type="search" name="search-line" className="main__search-line_input" placeholder="поиск врача, статьи, обсуждения..." ></input>
                    <img className="main__search-line_magnifier" src={magnifier} alt="лупа поиска" />
                </div>
                <div className="main__stats">
                    <div className="main__stats_element">
                        <p className="main__stats_element_count">5000</p>
                        <h3 className="main__stats_element_title">пациентов</h3>
                    </div>
                    <div className="main__stats_element">
                        <p className="main__stats_element_count">2000</p>
                        <h3 className="main__stats_element_title">специалистов</h3>
                    </div>
                    <div className="main__stats_element">
                        <p className="main__stats_element_count">800</p>
                        <h3 className="main__stats_element_title">научных статей</h3>
                    </div>
                    <div className="main__stats_element">
                        <p className="main__stats_element_count">3000</p>
                        <h3 className="main__stats_element_title">обсуждений</h3>
                    </div>
                </div>
            </section>
            <section className="main__slogan-container">
                <p className="main__slogan">Здесь врач найдет своего пациента</p>
                <p className="main__slogan_alt">Здесь пациент найдет своего врача</p>
            </section>
            <section className="patient-possibilities">
                <h2 className="patient-possibilities__title">Пациент может:</h2>
                <ul className="patient-possibilities__list">
                    <li className="patient-possibilities__element">Найти подходящего врача</li>
                    <li className="patient-possibilities__element">Ознакомиться с необходимой информацией о заболеваниях</li>
                    <li className="patient-possibilities__element">Следить за актуальными новостями врача и мира медицины</li>
                    <li className="patient-possibilities__element">Получить первичную консультацию</li>
                    <li className="patient-possibilities__element">Вести свой персональный дневник здоровья</li>
                    <li className="patient-possibilities__element">Участвовать в обсуждениях </li>
                </ul>
            </section>
            <section className="doc-check">
                <h2 className="doc-check__title">Наши специалисты проходят проверку</h2>
                <p className="doc-check__about">При проверке мы запрашиваем данные об образовании и праве на осуществление медицинской деятельности на территории РФ.</p>
            </section>
            <section className="doc-briefs">
                <DoctorBrief image={doc1} name="Дорофеева Анна Владимировна" profession="Врач педиатр, 10 лет опыта" text="Супер пупер текст о враче. Очень крутой врач. Всем советую. Работает со всеми. Лечит всё на свете. Нигде такого не найдете, только у нас." />
                <DoctorBrief image={doc2} name="Кошкина Валерия Ивановна" profession="Врач педиатр, 10 лет опыта" text="Супер пупер текст о враче. Очень крутой врач. Всем советую. Работает со всеми. Лечит всё на свете. Нигде такого не найдете, только у нас." />
                <DoctorBrief image={doc3} name="Саркисян Дмитрий Юрьевич" profession="Врач педиатр, 10 лет опыта" text="Супер пупер текст о враче. Очень крутой врач. Всем советую. Работает со всеми. Лечит всё на свете. Нигде такого не найдете, только у нас." />
            </section>
        </div>
    )
}

export default Main;