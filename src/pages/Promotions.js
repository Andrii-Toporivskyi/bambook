import React from 'react'

export default function Promotions(props) {
  const { isMobile } = props;
  return (
    <div className='club-card' style={{ backgroundImage: `url("image/foncard.jpg")`, justifyContent: 'center', alignItems: 'center' }}>
      <div className='club-card-title' style={{ fontSize: 30, paddingTop: 10, alignItems: 'center' }}>
        <p className='promo'>Запрошуємо Тебе стати Учасником Клубу «Бамбук»</p>
      </div>
      <div className='WWF' style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', columnGap: 50, padding: '0px 5%' }}>
        <div className='text-club-card' style={{ alignItems: 'center', width: 500, flex: '1 1 auto', }} >
          Що Тобі це дасть?<br></br><br></br>
          1.  Можливість оплачувати свої замовлення бонусами;<br></br>
          2.  Шанс покреативити, приймаючи участь в обговоренні Промоакції Місяця;<br></br>
          3.   Можливість відчути себе корисним, долучившись до збереження навколишнього середовища. ЯК?<br></br><br></br>
          Компанія "Бамбук" планує  перераховувати допомогу у Всесвітній фонд  дикої природи «World Wildlife Fund, WWF”<br></br> накопичені бонуси на Твоєму особистому рахунку, як Учасника Клубу, якими Ти оплачуватимеш своє замовлення.<br></br><br></br>
          Що потрібно , щоб стати Учасником Клубу «Бамбук» і отримати клубну карту?<br></br><br></br>
          1.  регулярно замовляти свої улюблені роли та суші, тим самим накопичуючи на своєму особистому рахунку бонуси<br></br> в розмірі 10% від кожного замовлення.<br></br>
          2.  підписатися у інстаграм;<br></br>
          3.  поставити лайки на 6 останніх постів;<br></br>
          4.  відмітити «Бамбук» у сторіс;<br></br>
          5.  написати відгук про свої емоції і наші роли у Google<br></br>
        </div>
        <div>
          <img className='img-wwf' src='image/wwf.png' style={{ width: 528, height: 300, paddingTop: 140, display: "flex", flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }} />
        </div>
      </div>
      <div className='card-info-img' style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', columnGap: 50, rowGap: 20, padding: '0px 5%', paddingTop: 50 }}>
        <div>
          <img className='card1' src='image/card1.png' style={{ width: 528, height: 300 }} />
        </div>

        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.55)", width: 500, alignItems: 'center', flexWrap: 'wrap', flex: '1 1 auto' }} >
          <p style={{ paddingTop: 20 }}>
            Карта «Special» дає можливість оплачувати<br></br>
            замовлення накопиченими бонусами у розмірі 55%<br></br>
            від замовлення. Щоб отримати дану клубну карту<br></br>
            необхідно зробити замовлень  на загальну суму<br></br>
            від 2999 грн.
          </p>
        </div>



      </div>
      <div className='card-info-img' style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', columnGap: 50, rowGap: 20, padding: '0px 5%', paddingTop: 50 }}>

        <div style={{ backgroundColor: "rgba(8, 165, 27, 0.55)", width: 500, alignItems: 'center', flexWrap: 'wrap', flex: '1 1 auto' }}>
          <p style={{ paddingTop: 20 }}>
            Карта  «Premium»  дає можливість оплачувати<br></br>
            замовлення накопиченими бонусами у розмірі 66%<br></br>
            від замовлення. Щоб отримати дану клубну карту<br></br>
            необхідно зробити замовлень  на загальну суму<br></br>
            від 4999грн.<br></br>

          </p>


        </div>


        <div>
          <img className='card2' src='image/card2.png' style={{ width: 528, height: 300 }} />
        </div>

      </div>



      <div className='card-info-img' style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', columnGap: 50, rowGap: 20, padding: '0px 5%', paddingTop: 50 }}>
        <div>
          <img className='card3' src='image/card3.png' style={{ width: 528, height: 300 }} />
        </div>

        <div style={{ backgroundColor: "rgba(255, 206, 78, 0.55)", width: 500, alignItems: 'center', flexWrap: 'wrap', flex: '1 1 auto' }}>
          <p style={{ paddingTop: 20 }}>
            Карта «VIP» дає можливість оплачувати<br></br>
            замовлення накопиченими бонусами у розмірі 88%<br></br>
            від замовлення. Щоб отримати дану клубну карту<br></br>
            необхідно зробити замовлень  на загальну суму<br></br>
            від 7999грн.
          </p>
        </div>

      </div>

    </div>
  )
}
