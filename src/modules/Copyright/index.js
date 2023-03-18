import './Copyright.css'
import mylogo from './img/mylogo.png'
import wheel from './img/wheel.png'
import wheel1 from './img/wheel1.png'

const Copyright = () => {
   return (
      <div className="copyright">
         <div className="copyright__row">
            <div className="copyright__logo">
               <a href="mailto:paul@gabow.ru?subject=Предложение работы">
                  <img
                     src={mylogo}
                     className="copyright__img move-right"
                     title="Кто заказывал такси на Дубровку?"
                     alt="Кто заказывал такси на Дубровку?"
                  />
               </a>
               <img
                  src={wheel}
                  className="copyright__img-wheel move-right1"
                  alt=""
               />
               <img
                  src={wheel1}
                  className="copyright__img-wheel1 move-right1"
                  alt=""
               />
            </div>
         </div>
      </div>
   ) 
}

export default Copyright
