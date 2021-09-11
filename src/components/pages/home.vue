<template>
    <div>
        <div class="screen_one">
            <div class="round_imgs">
                <img src="../../assets/img/round1.png" />
                <img src="../../assets/img/round2.png" />
                <img src="../../assets/img/round3.png" />
                <img src="../../assets/img/round4.png" />
                <img src="../../assets/img/round5.png" />
                <img src="../../assets/img/round6.png" />
                <img src="../../assets/img/round7.png" />
                <img src="../../assets/img/round8.png" />
                <!-- <img src="../../assets/img/round9.png"/> -->
            </div>

            <header class="def-width-medium">
                <div class="side-left">
                    <a href="#">
                        <img src="../../assets/img/phone.png" />
                        <span>+998 (90) 101-17-00</span>
                    </a>
                    <a href="#">
                        <img src="../../assets/img/location.png" />
                        Самарканд, ул. Муаззамхон145
                    </a>
                </div>
                <div class="side-right">
                    <a href="#">
                        <img src="../../assets/img/instagram.png" />
                    </a>
                    <a href="#">
                        <img src="../../assets/img/facebook.png" />
                    </a>
                    <a href="#">
                        <img src="../../assets/img/telegram.png" />
                    </a>
                </div>
            </header>
            <div class="first_block def-width">
                <div class="blockk_heading def-width-medium">
                    <a href="/">
                        <img src="../../assets/img/logo.png" class="logo" />
                    </a>
                    <button @click="showform" class="pc-elements">Оставьте заявку онлайн</button>
                    <button @click="showform" class="mobile-elements">Заявка</button>
                </div>
                <div class="block_body def-width-medium">
                    <div class="left_side">
                        <h1>
                            Школа с углубленным изучением математики и физики на английском языке.
                        </h1>
                        <span
                            >Физико-математическая школа в Самарканде для детей от 6 до 18 лет</span
                        >
                        <button class="yellow">Свяжитесь с нами</button>
                    </div>
                    <div class="right_side">
                        <img src="../../assets/img/baby.png" />
                    </div>
                </div>
            </div>
            <div class="about_school def-width-medium">
                <a href="#study_block">
                    <img src="../../assets/img/down.png" />
                    <span>Подробнее о школе</span>
                </a>
            </div>
        </div>

        <div class="screen_two def-width-medium">
            <div class="item_container">
                <div class="item_block" v-for="item of lessonsBox" :key="item.key">
                    <img src="../../assets/img/flag.png" />
                    <span class="bold_span">{{ item.heading }}</span>
                    <span class="grey_span"> {{ item.description }}</span>
                    <img class="threecub" src="../../assets/img/threecub.png" />
                </div>
            </div>
            <div class="call_us">
                <button class="yellow">Свяжитесь с нами и узнайте цены</button>
            </div>

            <div class="about_study_block" id="study_block">
                <div class="left_info_side">
                    <div class="heading">
                        <span>Подробнее об обучении</span>
                        <h2>Внеклассные мероприятия</h2>
                        <p>
                            Руководство AL-XORAZMIY уделяет огромное внимание не только качеству
                            обучения, но и сохранению физического и психического здоровья детей.
                            Благодаря удачно составленному расписанию, в котором учебные нагрузки
                            сочетаются с отдыхом, творческими и спортивными занятиями, школьники не
                            испытывают утомления и информационной перегрузки.
                        </p>
                    </div>
                    <div class="btns">
                        <button class="yellow">Свяжитесь с нами</button>
                        <button class="transparent">Свяжитесь с нами</button>
                    </div>
                </div>
                <div class="right_kid_block">
                    <img src="../../assets/img/kid_img_yllw.png" />
                </div>
            </div>
        </div>
        <!-- boboshox's -->
        <div class="about-study def-width">
            <div class="left">
                <img class="blueback" src="../../assets/img/backgrpund.png" />
                <img class="teacher" src="../../assets/img/woman-using-tablet.png" />
            </div>
            <div class="right">
                <div class="heading">
                    <span>Подробнее об обучении</span>
                    <h2>
                        Предлагает целостную систему образования, включающую интеллектуальное,
                        нравственное, эстетическое и физическое развитие
                    </h2>
                    <p>
                        Для каждого учителя стоит задача не просто дать знания, но и позаботиться о
                        том, чтобы ребёнок был вовлечен в процесс, не стеснялся задавать вопросы и
                        развивался как личность.
                    </p>
                </div>
                <div class="btns">
                    <button class="yellow">Свяжитесь с нами</button>
                </div>
            </div>
        </div>

        <div class="grid_container def-width-medium">
            <img src="../../assets/grid_img/grid1.png" />
            <img src="../../assets/grid_img/grid2.png" />
            <img src="../../assets/grid_img/grid6.png" />
            <img src="../../assets/grid_img/grid7.png" />
            <img src="../../assets/grid_img/grid5.png" />
            <img src="../../assets/grid_img/grid6.png" />
            <img src="../../assets/grid_img/grid7.png" />
            <img src="../../assets/grid_img/grid5.png" />
            <img src="../../assets/grid_img/grid1.png" />
            <img src="../../assets/grid_img/grid2.png" />
            <img src="../../assets/grid_img/grid1.png" />
            <img src="../../assets/grid_img/grid7.png" />
            <img src="../../assets/grid_img/grid6.png" />
        </div>

        <div class="grid_container_for_mobile  def-width-medium ">
            <carousel :autoplay="false" :nav="false" :items="true" :dots="false">
                <img src="../../assets/grid_img/grid2.png" />
                <img src="../../assets/grid_img/grid6.png" />
                <img src="../../assets/grid_img/grid7.png" />
                <img src="../../assets/grid_img/grid5.png" />
                <img src="../../assets/grid_img/grid6.png" />
                <img src="../../assets/grid_img/grid7.png" />
                <img src="../../assets/grid_img/grid5.png" />
                <img src="../../assets/grid_img/grid2.png" />
                <img src="../../assets/grid_img/grid7.png" />
            </carousel>
        </div>

        <div class="margin"></div>

        <div class="def-width-small">
            <div class="heading centered">
                <span>Остались вопросы?</span>
                <h2>
                    Оставьте заявку с интересующим вас вопросом об обучении - обычно мы отвечаем в
                    течение двух часов.
                </h2>
            </div>
            <div class="btns centered">
                <button class="yellow">Свяжитесь с нами</button>
            </div>
        </div>

        <div class="margin"></div>

        <!-- SHAKH'S CODE -->
        <div class="screen-faq def-width-medium">
            <div class="def-width-small">
                <div
                    class="item"
                    @click="showText(item.id)"
                    v-for="item of questions"
                    :key="item.id"
                    :class="{ active: item.isActive, question: !item.isActive }"
                >
                    <p>{{ item.question }}</p>
                    <span>{{ item.answer }}</span>
                    <img src="../../assets/icon/cross.svg" />
                </div>
            </div>
        </div>
        <!-- SHAKH'S CODE END -->

        <div class="margin"></div>

        <footer>
            <div class="margin-small"></div>

            <div class="def-width-medium">
                <div class="top">
                    <div class="left">
                        <img src="../../assets/img/Icon ionic-ios-call.png" />
                        <span class="pc-elements"
                            >+998 (90)
                            <p>101-17-00</p></span
                        >
                    </div>
                    <div class="right">
                        <a href="#">
                            <img src="../../assets/icon/instagram.svg" />
                        </a>
                        <a href="#">
                            <img src="../../assets/icon/facebook.svg" />
                        </a>
                        <a href="#">
                            <img src="../../assets/icon/telegram.svg" />
                        </a>
                    </div>
                </div>

                <div class="margin"></div>

                <div class="middle">
                    <div class="wrapper">
                        <span>Подробнее</span>
                        <div class="links">
                            <a href="">Главная страница</a>
                            <a href="">Преподаватели</a>
                            <a href="">Чему мы учим</a>
                            <a href="">Отзывы</a>
                            <a href="">Вопросы и ответы</a>
                        </div>
                    </div>
                    <div class="wrapper">
                        <span>Вакансии</span>
                        <div class="links">
                            <a href="">Преподаватель по информатике</a>
                            <a href="">Преподаватель по физике</a>
                            <a href="">Бухгалтер</a>
                            <a href="">Офисный менеджер</a>
                            <a href="">Менеджер продаж</a>
                        </div>
                    </div>
                    <div class="wrapper">
                        <span>Телефоны и почта</span>
                        <div class="links">
                            <a href="">+998 (90) 101-17-00</a>
                            <a href="">+998 (91) 101-17-00</a>
                            <a href="">+998 (93) 101-17-00</a>
                            <a href="">hello@al-xorazmiy.uz</a>
                        </div>
                    </div>
                    <div class="wrapper">
                        <span>Социальные сети</span>
                        <div class="links">
                            <a href="">Instagram</a>
                            <a href="">Facebook</a>
                            <a href="">Telegram</a>
                        </div>
                    </div>
                </div>

                <div class="margin"></div>

                <div class="bottom">
                    <span>MChJ «Al-Xorazmiy», 2021</span>
                    <span>Created by Madad Studio</span>
                </div>
            </div>
        </footer>
        <transition name="fade">
            <div class="def_bg" @click="hideform" v-if="animation.modalform"></div>
        </transition>
        <transition name="bottom-top">
            <div class="def-widget" v-if="animation.modalform">
                <div @click="hideform" class="close">
                    <img src="../../assets/icon/x.svg" />
                </div>
                <form class="padding-sides" @submit="Add({ service: 'Course' })">
                    <div class="heading">
                        <span class="h2">Записаться на курс</span>
                    </div>
                    <label for="name">
                        Ваше имя
                        <input type="text" id="name" placeholder="Введите свое имя" />
                    </label>

                    <label for="number">
                        Введите номер телефона
                        <input type="number" id="number" placeholder="+998" />
                    </label>

                    <label for="select">
                        Введите услугу
                        <select name="" id="select">
                            <option value="frontend">Frontend</option>
                            <option value="smm">Smm</option>
                            <option value="design">Design</option>
                        </select>
                    </label>

                    <label for="text">
                        Оставьте комментарий
                        <textarea
                            name="text"
                            id="text"
                            placeholder="Введите вопрос или комментарий"
                        ></textarea>
                    </label>
                    <div class="submit-block">
                        <button class="submit">Отправить заявку</button>
                        <span class="note"
                            >Нажимая на кнопку, я соглашаюсь на обработку персональных данных</span
                        >
                    </div>
                </form>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import carousel from 'vue-owl-carousel'

export default {
    methods: {
        ...mapActions(['showText', 'hideform', 'showform', 'Add']),
    },
    computed: {
        ...mapState(['questions', 'animation', 'lessonsBox']),
    },
    components: { carousel },
}
</script>

<style></style>
