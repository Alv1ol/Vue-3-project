<script setup lang="ts">
import { IconSVG } from '@/Shared/Icons'
</script>

<template>
  <header class="header">
    <div class="header__photo">
      <img src="./assets/img/photo3.jpg" alt="#" />
    </div>

    <div class="header__info">
      <div class="header__name">Nickolay Petrushenko</div>

      <div class="header__prof">Vue.js Developer</div>

      <div class="header__location">
        <div class="header__location-geo">
          <IconSVG type="location" />
        </div>

        <div class="header__location-text">Lugansk, Russia</div>
      </div>
    </div>
  </header>

  <hr class="line__1" />

  <hr class="line__2" />

  <div class="contact">
    <h1 class="contact__header">Contacts</h1>
    <div class="contact__phone">
      <div class="contact__phone-icon">
        <IconSVG type="phone" />
      </div>
      <div class="contact__phone-text">+7 (959) 143-00-56</div>
    </div>
    <div class="contact__mail">
      <div class="contact__mail-icon">
        <IconSVG type="mail" />
      </div>
      <div class="contact__mail-text">Alv1olgg@gmail.com</div>
    </div>
    <div class="contact__website">
      <div class="contact__website-icon">
        <IconSVG type="website" />
      </div>
      <a href="https://github.com/Alv1ol" class="contact__a"
        >https://github.com/Alv1ol</a
      >
    </div>
  </div>

  <hr class="line__3" />

  <div class="about-me">
    <h1 class="about-me__header">About Me</h1>
    <div class="about-me__text">
      Расскажу немного о себе:) Я довольно спокойный и добрый человек, которому
      интересно АйТи индустрия, а особенно Вэб разработка. Я нменого опытный
      Vue3 разработчик. Люблю изучать, что-то новое и поднимать свой уровень
      знания языка программирования. Если заинтересовал - пишите!)
    </div>
  </div>

  <hr class="line__4" />

  <div class="skill">
    <h1 class="skill__header">Skills</h1>
    <ul class="skill__list">
      <li>UX UI Design</li>
      <li>Web Design</li>
      <li>Vue3</li>
      <li>JavaScript/TypeScript</li>
      <li>Lecturer</li>
    </ul>
  </div>

  <hr class="line__5" />

  <div class="education">
    <h1 class="education__header">Education</h1>
    <div class="education__list">
      <ul>
        <li class="li__py">
          2020 - 2022
          <p class="education__list-brand">Python</p>
          Solo learning
        </li>

        <li class="li__vue">
          2023 - Until today
          <p class="education__list-brand">Vue Developer</p>
          Solo learning
        </li>

        <li class="li__Dahl">
          2024 - Until today
          <p class="education__list-brand">Software engineering</p>
          Dahl University
        </li>
      </ul>
    </div>
  </div>

  <hr class="line__6" />

  <div class="language">
    <h1 class="language__header">Language</h1>
    <div class="language__list">
      <p><b>Russian</b> - Native</p>
      <p><b>English</b> - CEFR - B2</p>
    </div>
  </div>

  <div class="experience">
    <h1 class="experience__header">Experience</h1>
    <div class="experience__list">
      <ul>
        <li class="experience-li__kwork">
          2020 - Until today
          <a
            href="https://kwork.ru/user/alv1olgg"
            class="experience__list-kwork"
            >Kwork</a
          >
          <p class="experience__list-kwork-tag">Freelancer</p>
        </li>
        <p class="experience__text-kwork">
          На Фрилансе я выполнял различные заказы связанные с версткой, вэб
          моментами, разработкой ботов и дизайном, если кликните на "Kwork" - то
          зайдете на мой профиль на Kwork. У меня с Kwork немного печальная
          ситуация сложилась, но надеюсь все скоро станет нормально.
        </p>

        <li class="experience-li__continental">
          Sen 2023 - Okt 2024
          <p class="experience__list-vue">Vue Developer</p>
          Continental group
        </li>
        <p class="experience__text-continental">
          Continental group - это некий СтартАП проект, который разрабатывает
          сайты и дизайн сайтов для покупателей или же своих идей. Тут я
          считаюсь как со-владельцем и вэб-разработчиком. Моя работа как вэб
          разработчик, это верстка + моменты с анимацией, так же немного логики
          сайта. Так же я занимаюсь корректировкой дизайна для сайтов наших
          покупателей.
        </p>

        <li class="experience-li__dahl">
          2024 - Until today
          <p class="experience__list-dahl">Lecturer</p>
          Dahl University
        </li>
        <p class="experience__text-dahl">
          Лаборант - лектор. Читаю лекции по WebGl, а особенно с графикой. Из
          того, что я уже "прочитал" на лекциях - это "Основы Компьютерной
          Графики" и так же "Основны методов сглаживания в компьютерной
          графике". Есть небольшое желание продолжать вести лекции дальше, ведь
          это интересный опыт:)
        </p>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* header */
.header__photo img {
  position: absolute;
  top: 168px;
  width: 262px;
  height: 262px;
  left: 208px;
  right: -208px;
  bottom: -168px;
  border: 1px solid transparent;
  border-radius: 500px;
}

.header__name {
  position: absolute;
  top: 216px;
  left: 648px;
  font-size: 48px;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: 0px;
}

.header__prof {
  position: absolute;
  width: 304px;
  height: 36px;
  left: 648px;
  right: 488px;
  top: 284px;
  bottom: 1720px;

  font-size: 28px;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: 0;
  padding-top: 16px;
  padding-bottom: 32px;
}

.header__location-geo {
  display: inline-block;
  position: absolute;

  width: 20px;
  height: 26px;
  left: 654px;
  top: 355px;

  padding-right: 20px;
}

.header__location-text {
  display: inline-block;
  position: absolute;

  width: 235px;
  height: 32px;
  left: 704px;
  right: 501px;
  top: 352px;
  bottom: 1656px;

  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
}

/* line */

.line__1 {
  /* Line */
  position: absolute;
  width: 344px;
  height: 1px;
  left: 168px;
  right: 928px;
  top: 479px;
  bottom: 1560px;
  background-color: #ccc;
}

.line__2 {
  /* Line */
  position: absolute;
  width: 615px;
  height: 1px;
  left: 645px;
  right: 168px;
  top: 479px;
  bottom: 1560px;
  background-color: #ccc;
}

.line__3 {
  position: absolute;
  width: 344px;
  height: 1px;
  left: 168px;
  right: 928px;
  top: 771px;
  bottom: 1268px;
  background-color: #ccc;
}

.line__4 {
  position: absolute;
  width: 615px;
  height: 1px;
  left: 645px;
  right: 168px;
  top: 771px;
  bottom: 1268px;
  background-color: #ccc;
}

.line__5 {
  position: absolute;
  width: 344px;
  height: 1px;
  left: 168px;
  right: 928px;
  top: 1127px;
  bottom: 912px;
  background-color: #ccc;
}

.line__6 {
  position: absolute;
  width: 344px;
  height: 1px;
  left: 168px;
  right: 928px;
  top: 1643px;
  bottom: 396px;
  background-color: #ccc;
}

/* contact */
.contact {
  position: absolute;
  width: 352px;
  height: 180px;
  left: 168px;
  right: 920px;
  top: 528px;
  bottom: 1332px;
}

.contact__header {
  position: absolute;
  width: 107px;
  height: 36px;
  left: 0;
  top: 0;
  right: 245px;
  bottom: 144px;

  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
}

.contact__phone-text {
  position: absolute;
  width: 296px;
  height: 32px;
  left: 56px;
  right: 0;
  top: 68px;
  bottom: 80px;

  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}

.contact__phone-icon {
  position: absolute;
  width: 23.41px;
  height: 23.41px;
  left: 4.63px;
  top: 72.66px;
}

.contact__mail-text {
  position: absolute;
  width: 296px;
  height: 32px;
  left: 56px;
  right: 0;
  top: 108px;
  bottom: 40px;

  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}

.contact__mail-icon {
  position: absolute;
  top: 115px;
  left: 4px;
}

.contact__a {
  position: absolute;
  top: 148px;
  left: 56px;
  right: 0;
  bottom: 0;

  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}

.contact__website-icon {
  position: absolute;
  top: 148px;
  left: 4px;
  right: 392px;
  bottom: 0px;
}

.contact__phone-icon,
.contact__phone-text,
.contact__mail-icon,
.contact__mail-text,
.contact__website-icon,
.contact__website-text {
  display: inline;
}

/* about me */
.about-me {
  position: absolute;
  width: 624px;
  height: 196px;
  top: 528px;
  left: 648px;
  right: 168px;
  bottom: 1316px;
}

.about-me__header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 160px;

  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0;
}

.about-me__text {
  position: absolute;
  top: 68px;
  left: 0;
  right: 0;
  bottom: 0;

  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
}

/* Skill */

.skill {
  position: absolute;
  width: 304px;
  height: 260px;
  top: 820px;
  right: 968px;
  bottom: 960px;
  left: 168px;
}

.skill__header {
  position: absolute;
  top: 0;
  left: 0;
  right: 234px;
  bottom: 224px;

  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0;
}

.skill__list {
  position: absolute;
  left: -20px;
  right: 0;
  top: 68px;
  bottom: 160px;

  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}

/* education */
.education {
  position: absolute;
  width: 304px;
  height: 420px;
  left: 168px;
  right: 968px;
  top: 1176px;
  bottom: 444px;
}

.education__header {
  position: absolute;
  width: 134px;
  height: 36px;
  left: 0;
  right: 170px;
  top: 0;
  bottom: 384px;

  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
}

/* li li__py */

.li__py {
  position: absolute;
  width: 272px;
  height: 32px;
  left: 32px;
  right: 0;
  top: 68px;
  bottom: 320px;

  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
}

.education__list-brand-kwork {
  margin-top: -5px;
  margin-bottom: -5px;
  font-weight: 500;
}

.education__kwork {
  text-decoration: none;
  color: #000;
  cursor: pointer;
}

/* li li__vue */

.li__vue {
  position: absolute;
  width: 272px;
  height: 32px;
  left: 32px;
  right: 0;
  top: 196px;
  bottom: 192px;

  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
}

.education__list-brand {
  font-weight: 500;
  margin-top: -5px;
  margin-bottom: -5px;
}

/* li dahl */
.li__Dahl {
  position: absolute;
  width: 272px;
  height: 32px;
  left: 32px;
  right: 0;
  top: 324px;
  bottom: 64px;

  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0;
}

.education__list-brand {
  font-weight: 500;
}

/* language */

.language {
  position: absolute;
  width: 229px;
  height: 140px;
  top: 1691px;
  left: 168px;
  bottom: 209px;
  right: 1043px;
}

.language__header {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 104px;
  right: 82px;

  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0;
}

.language__list {
  position: absolute;
  top: 68px;

  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
}

/* experience */

.experience {
  position: absolute;
  top: 820px;
  left: 648px;
}

.experience__header {
  position: absolute;
  top: 0;
  bottom: 912px;

  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0px;
}

/* Kwork */

.experience-li__kwork {
  position: absolute;
  width: 198px;
  height: 32px;
  left: 32px;
  right: 394px;
  top: 68px;
  bottom: 848px;

  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
}

.experience__list-kwork {
  display: block;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-weight: 500;
  margin-top: -5px;
}

.experience__list-kwork-tag {
  margin-top: -5px;
}

.experience__text-kwork {
  position: absolute;
  text-align: left;
  margin-top: -20px;

  width: 592px;
  height: 160px;
  left: 32px;
  right: 0;
  top: 180px;
  bottom: 608px;

  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
}

/* continental */

.experience-li__continental {
  position: absolute;
  margin-top: 25px;
  width: 198px;
  height: 32px;
  left: 32px;
  right: 394px;
  top: 340px;
  bottom: 544px;

  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
}

.experience__list-vue {
  font-weight: 500;
  margin-top: -5px;
  margin-bottom: -5px;
}

.experience__text-continental {
  position: absolute;
  margin-top: 10px;
  width: 592px;
  height: 160px;
  left: 32px;
  right: 0;
  top: 460px;
  bottom: 304px;

  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
}

/* Dahl */
.experience-li__dahl {
  position: absolute;
  width: 198px;
  height: 32px;
  left: 32px;
  right: 394px;
  top: 735px;
  bottom: 240px;

  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
}

.experience__list-dahl {
  font-weight: 500;
  margin-top: -5px;
  margin-bottom: -5px;
}

.experience__text-dahl {
  position: absolute;
  width: 592px;
  height: 160px;
  left: 32px;
  right: 0;
  top: 805px;
  bottom: 0;

  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
}
</style>
