import "./AboutUs.css";
import SectionTitle from "components/section-title/SectionTitle";

const AboutUs = () => (
  <section>
    <SectionTitle title="О нас" />
    <div className="about-us-text">
      <p>
        Вы попали в неприятную ситуацию на дороге и самостоятельно доехать до
        автосервиса нет возможности? Сегодня в такой ситуации может оказаться
        каждый водитель без исключения. Оставлять свое транспортное средство на
        дороге далеко не самое удачное решение, более рациональный вариант
        воспользоваться услугой эвакуатора.
      </p>
      <p>
        Если в аварийной ситуации Вы решили обратиться именно к нам, то Вы
        гарантировано получите качественный сервис в самые минимальные сроки. Мы
        быстро приедем в любое необходимое место и выручим Вас, эвакуировав
        легковой автомобиль, джип, микроавтобус, а также спецтехнику.
      </p>
      <p>
        Полная погрузка, максимальная масса составляет 3 тонны. Пока Ваше
        транспортное средство находится на эвакуаторе, все находящиеся в нем
        пассажиры могут удобно разместиться в нашем салоне (в нем есть 5
        пассажирских мест). Даже если автомобиль застрял в грязи или яме, мы
        сможем вытащить его, погрузить на эвакуатор и отвезти в автосервис для
        последующего ремонта. Помимо этого, Вы можете воспользоваться услугой
        "прикурить авто". Водители-профессионалы с большим опытом работы всегда
        готовы примчаться к Вам на помощь и выручить даже в самой сложной
        ситуации.
      </p>
    </div>
  </section>
);

export default AboutUs;
