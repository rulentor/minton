<script>
/**
 * Contacts profile component
 */
export default {
    head() {
        return {
            title: `${this.title} `,
        };
    },
    data() {
        return {
            title: "Профиль",
            items: [{
                    text: "TMT",
                    href: "/"
                },
                {
                    text: "Персонал CRM",
                    href: "/"
                },
                {
                    text: "Профиль",
                    active: true
                }
            ]
        };
    },
    middleware: 'router-auth'
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-lg-4 col-xl-4">
            <div class="card">
                <div class="card-body text-center">
                    <img src="~/assets/images/users/avatar-1.jpg" class="rounded-circle avatar-xl img-thumbnail" alt="profile-image" />

                    <h4 class="mt-3 mb-0">Бабин В. В.</h4>
                    <p class="text-muted">@babinVV</p>

                    <button type="button" class="btn btn-success btn-xs waves-effect mb-2 waves-light">
                        Написать сообщение
                    </button>

                    <div class="text-left mt-3">
                        <h4 class="font-13 text-uppercase">О Враче:</h4>
                        <p class="text-muted font-13 mb-3">
                            Медицинский директор — главный врач, врач-кардиолог, врач-терапевт, высшая квалификационная категория, к.м.н.
                        </p>

                        <div class="table-responsive">
                            <table class="table table-borderless table-sm">
                                <tbody>
                                    <tr>
                                        <th scope="row">Полное имя :</th>
                                        <td class="text-muted">Бабин Вячеслав Вячеславович</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Должность:</th>
                                        <td class="text-muted">терапевт, кардиолог</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Квалификация:</th>
                                        <td class="text-muted">высшая, к.м.н.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </ul>
                </div>
                <!-- end card-box -->
            </div>
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title">Направления деятельности:</h4>

                    <div class="pt-1">
                        <h6 class="text-uppercase mt-0">
                            Терапия
                            <span class="float-right"></span>
                        </h6>
                        <b-progress height="5px" :value="100" variant="purple"></b-progress>
                    </div>

                    <div class="mt-2 pt-1">
                        <h6 class="text-uppercase">
                            Сложный диагноз
                            <span class="float-right"></span>
                        </h6>
                        <b-progress height="5px" :value="100" variant="purple"></b-progress>
                    </div>

                    <div class="mt-2 pt-1">
                        <h6 class="text-uppercase">
                            Коморбидные состояния
                            <span class="float-right"></span>
                        </h6>
                        <b-progress height="5px" :value="100" variant="purple"></b-progress>
                    </div>

                    <div class="mt-2 pt-1">
                        <h6 class="text-uppercase">
                            Кардиология
                            <span class="float-right"></span>
                        </h6>
                        <b-progress height="5px" :value="100" variant="purple"></b-progress>
                    </div>
                </div>
                <!-- end card-box-->
            </div>
        </div>
        <!-- end col-->

        <div class="col-lg-8 col-xl-8">
            <div class="card">
                <div class="card-body">
                    <b-tabs content-class="mt-1" pills class="navtab-bg">
                        <b-tab active>
                            <template v-slot:title>
                                <i class="mdi mdi-face-profile mr-1"></i>Выбрать меня
                            </template>
                            <div>
                                <h5 class="mb-4 text-uppercase">
                                    Компетенции и опыт
                                </h5>

                                <ul class="list-unstyled timeline-sm">
                                    <li class="timeline-sm-item">
                                        <span class="timeline-sm-date">2015 - 18</span>
                                        <h5 class="mt-0 mb-1">Преподавание в мед. вузе (МГУ имени Н. П. Огарева)</h5>
                                    </li>
                                    <li class="timeline-sm-item">
                                        <span class="timeline-sm-date">2012 - 15</span>
                                        <h5 class="mt-0 mb-1">Преподавание на ФУВе (МГУ имени Н. П. Огарева)</h5>
                                    </li>
                                    <li class="timeline-sm-item">
                                        <span class="timeline-sm-date">2007 - 11</span>
                                        <h5 class="mt-0 mb-1">Кардиолог республиканского отделения нарушений ритма</h5>
                                    </li><li class="timeline-sm-item">
                                        <span class="timeline-sm-date">2006 - 07</span>
                                        <h5 class="mt-0 mb-1">Терапевт многопрофильного стационара, кардиолог и функциональный диагност ГП Москвы</h5>
                                    </li>
                                    </li><li class="timeline-sm-item">
                                        <span class="timeline-sm-date">2004 - 06</span>
                                        <h5 class="mt-0 mb-1">Зав. кабинетом ФД, врач-кардиолог ГНЦ РАМН</h5>
                                    </li>
                                    </li><li class="timeline-sm-item">
                                        <span class="timeline-sm-date">2003 - 13</span>
                                        <h5 class="mt-0 mb-1">Зав. отделением терапии консультативной поликлиники ЦКБ ГА</h5>
                                    </li>

                                </ul>

                            </div>
                            <!-- end tab-pane -->
                        </b-tab>
                    </b-tabs>
                </div>
                <!-- end card-box-->
            </div>
        </div>
        <!-- end col -->
    </div>
    <!-- end row-->
</div>
</template>
