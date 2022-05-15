import React from 'react'
import Slider from "react-slick";
import Slider2 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';

// import { HashLink } from 'react-router-hash-link';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };
}
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}
var ResizeMixin = {
  componentDidMount: function () {
    window.addEventListener('resize', this._resize_mixin_callback);
  },
  _resize_mixin_callback: function () {
    this.setState({
      viewport: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    });
  },
  componentWillUnmount: function () {
    window.removeEventListener('resize', this._resize_mixin_callback);
  }
};




export default function SimpleSlider(props) {
  const { isMobile } = props;


  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };




  return (

    <div  >

      <div className='slider-info-frag' style={{ display: 'flex', flexWrap: "wrap", justifyContent: "center", marginLeft: "12%", marginRight: "12%", alignItems: "center", columnGap: 42 }}>

        <div className='title-text' style={{ width: 500, }}>
          <h1>Суші Бамбук - такі Унікальні як Ти </h1>

          <p className='col-1'>Лише свіжі морепродукти та інгредієнти</p>
        </div>



        <div className='slick' style={{ width: 590, height: 590, margin: '0px 40px', marginBottom: 70 }}>
          <Slider className='slider' {...settings}>
            <div>

              <img src='image/setslide1.png' style={{ width: 590, height: 590, borderRadius: 100 }} />
              <h2 style={{ color: "white" }}> Сет "4 сири"<br></br></h2>
              <h3 style={{ color: "white", wordSpacing: "80px", paddingTop: 10 }}>Вага:850г            Ціна:555₴

              </h3>
            </div>
            <div>
              <img src='image/setslide2.png' style={{ width: 590, height: 590, borderRadius: 100 }} />
              <h2 style={{ color: "white" }}> Сет "Філадельфія"<br></br></h2>
              <h3 style={{ color: "white", wordSpacing: "80px", paddingTop: 10 }}>Вага:1230г            Ціна:999₴
              </h3>

            </div>
            <div>
              <img src='image/setslide3.png' style={{ width: 590, height: 590, borderRadius: 100 }} />
              <h2 style={{ color: "white" }}> Сет "Смажені Роли"<br></br></h2>
              <h3 style={{ color: "white", wordSpacing: "80px", paddingTop: 10 }}>Вага:930г            Ціна:555₴
              </h3>

            </div>
            <div>
              <img src='image/setslide4.png' style={{ width: 590, height: 590, borderRadius: 100 }} />
              <h2 style={{ color: "white" }}> Сет "Гон-Конг"<br></br></h2>
              <h3 style={{ color: "white", wordSpacing: "80px", paddingTop: 10 }}>Вага:1370г           Ціна:1111₴
              </h3>

            </div>
          </Slider>

        </div>

      </div>


      <div className='button-menu' style={{ textAlign: "left", display: "flex", justifyContent: "center", paddingTop: 20 }}>
        <Button variant="contained" style={{ backgroundColor: "#08a51b", width: 305, height: 65, top: 605, alignItems: "left", borderRadius: 20, color: "white", fontSize: 15, cursor: "pointer", fontSize: 26, }} onClick={() => { window.location.href = "/product" }}>Зробити замовлення</Button>
      </div>

      <div className='about-info' style={
        isMobile ? {
          paddingLeft: 10,
          paddingRight: 10,
        } : {}
      }>
        <div className='about' style={{ color: "white", fontSize: 30, paddingBottom: 21 }}>
          <p className='about-inf'>ПРО НАС ТА НАШУ КОМАНДУ</p>
        </div>
        <div className='about-title' style={{ paddingTop: 10, textAlign: "justify", fontSize: 25 }}>
          <p className='title-about'> Ми компанія "БАМБУК" - нова Black Kitchen Delivery у місті Лева. Запускаємо для Вас,
            львів’ян та гостей нашого чудового міста, Доставку ролів та суші,
            приготовлених з особливою увагою до деталей. Разом з тим, ми уже маємо успішний досвід
            понад 14 років у сфері гостинності HORECA.
            <br></br>
            <br></br>

            З 2008 року організовуємо святкові події для своїх особливих гостей в родинному ресторані "Династія". Чимало молодих людей поєднали свої долі в наших гостинних залах, започаткували свої династії, щоразу повертаючись до нас відмічати свої урочистості.
            <br></br>
            <br></br>
            Наша команда щоранку спішить у свою компанію, щоб Разом в колективі професійних ,
            харизматичних,  молодих людей створювати для Тебе, не лише справді смачні роли та суші,
            а й максимум позитивних емоцій!</p>
        </div>
        <div className='slider-2' style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: " center", justifyContent: 'center', columnGap: 42 }}>
          <div className='courier' style={{ width: 590, height: 650, }}>
            <Slider2 {...settings}>
              <div className='img2'>

                <img className='img2' src='image/manager.jpg' style={{ width: 590, height: 700 }} />
                <h2 style={{ color: "white" }}> </h2>
              </div>
              <div className='img2'>
                <img className='img2' src='image/courier.jpg' style={{ width: 590, height: 700 }} />
                <h2 style={{ color: "white" }}></h2>
              </div>

            </Slider2>
          </div>
          <div className='text-item' style={{ fontSize: 25, textAlign: "left", textAlign: "justify", paddingTop: 83, flex: '1 1 auto', width: 250 }}>
            <p className='title-slide2' style={{ textAlegn: "center" }}>Для Тебе, наш Унікальний Замовнику, стараються:</p><br></br>
            <p className='title-slide-pre'>🎋   Наші креативні Сушисти, які  створюють особливі роли та суші, додаючи у рецепти секретний інгрідієнт, який викликає звикання<br></br><br></br>
              🎋    Наші завжди привітні Менеджери з нетерпінням чекають на кожен Твій дзвінок, щоб прийняти  замовлення та подарувати Тобі максимум позитиву від спілкування<br></br><br></br>
              🎋   Наші уважні до дрібничок Адміністратори піклуються про вчасне і якісне оформлення Твого замовлення, використовуючи зручне пакування<br></br> з еко-роскладних матеріалів, яке дозволить Тобі насолодитися улюбленими ролами та суші вдома, в офісі чи на природі<br></br><br></br>
              🎋     Кур’єри, наші сучасні Енеї, моторно доставлять Твоє замовлення<br></br><br></br>
              🎋     Наші Маркетологи втілюють свої найсміливіші ідеї, щоб здивувати і додати у Твоє життя позитивних та радісних емоцій<br></br><br></br>
            </p>

          </div>

        </div>
      </div>


      <div className='about-for-we'>
        <div>
          А також Разом зі своєю чудовою командою, над формуванням якої працювали чимало часу, працюємо Ми – дружна Родина: <br></br> <br></br> 🎋  Дзядикевич Оксана Володимирівна -  Власниця, за сумісництвом Керівник Компанії.<br></br><br></br>

        </div>
        <div className='item-wrap'> </div>
        <div style={{ textAlign: "justify" }}>
          🎋  Вихопень Віталій Богданович - коханий Чоловік, який прискіпливо вибирає постачальників для забезпечення нашого виробництва лише сертифікованими продуктами. Особисто контролює якість продуктів та дотримання умов іх зберігання.<br></br> <br></br>
          🎋  Топорівська Влада Віталіївна - старша Доня, мій Помічник - «Права рука» . Координує роботу всіх відділів компанії.<br></br> <br></br>
          🎋  Топорівський Андрій Романович – рідний Зять. Створив цей зручний сайт, щоб Тобі, було легко і приємно замовляти свої улюблені суші.<br></br> <br></br>
          🎋  Вихопень Дана Віталіївна – молодша Доня, мій «позитивчик». Взяла на себе «ношу Головного Дегустатора»<br></br> <br></br><br></br>
          Кожен з нас вкладає частинку своєї душі, щоб компанія «БАМБУК» стала для Тебе  не просто Доставкою, а Віртуальним другом, який дасть Тобі можливість відчути, що про Тебе піклуються, та заздалегідь знають, що Тобі привезти, щоб підняти настрій або «додати перчинку».

        </div>
      </div>

      <div className='delivery-frag'>
        <div id='delivery' className='delivery' style={{ fontSize: 30, paddingTop: 80 }}>
          <p className='delivery-info'>ДОСТАВКА І ОПЛАТА</p>
        </div>

        <div className='delivery-bord' style={{ flexWrap: "wrap", display: "flex", flexDirection: "row", justifyContent: "center", columnGap: 20 }}>
          <div className='info-delivery' style={{ width: 250, flex: "1 1 auto" }}>
            <p className='bord-title'>
              Шановні наші Замовники!<br></br> Кур’єр Бамбук Суші має на доставку:<br></br><br></br>
              33 хв - Зелена Зона<br></br>
              44 хв - Жовта Зона<br></br>
              88 хв - Червона Зона<br></br><br></br>
              Вартість доставки складає 50 грн.<br></br><br></br>
              Безкоштовна Доставка від 333 грн <br></br><br></br>
              На самовивіз знижка 10% <br></br><br></br>
              У вас є можливість оплатити своє замовлення:<br></br><br></br>
              Онлайн на сайті  або  готівкою при отримані
            </p>
          </div>
          <iframe className='map'
            src="https://www.google.com/maps/d/embed?mid=1A50vSPOIUgKMqOU51x8fchqMgOKV50x2&ehbc=2E312F"
            width="640"
            height="480"
          ></iframe>

        </div>
      </div>













    </div >





  );
}




