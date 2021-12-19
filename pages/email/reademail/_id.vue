<script>
import Toolbar from "../toolbar";
import Sidepanel from "../sidepanel";
import {
    emailData
} from "../data-inbox";

/**
 * Read-email component
 */
export default {
    head() {
        return {
            title: `${this.title} | Карманный Медик`,
        };
    },
    components: {
        Toolbar,
        Sidepanel,
    },
    asyncData({
        params
    }) {
        const emailRead = emailData.find((user) => String(user.id) === params.id);
        return {
            emailRead,
        };
    },
    data() {
        return {
            title: "Работа с документами",
            items: [{
                    text: "Начало",
                },
                {
                    text: "Документы",
                    href: "/",
                },
                {
                    text: "Хранилище",
                    active: true,
                },
            ],
        };
    },
    middleware: "router-auth",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <Sidepanel />
                    <div class="inbox-rightbar">
                        <Toolbar />

                        <div class="mt-4">
                            <h5 class="font-18">Ваша подписка на услуги Врач у Вас дома одобрена!</h5>
                            <hr />
                            <div class="media mb-3 mt-1">
                                <img class="d-flex mr-2 rounded-circle" src="~/assets/images/users/avatar-2.jpg" alt="placeholder image" height="32" />
                                <div class="media-body">
                                    <small class="float-right">14 Дек, 2020, 15:17</small>
                                    <h6 class="m-0 font-14">Техподдержка</h6>
                                    <small class="text-muted">Отправитель: jonathan@domain.com</small>
                                </div>
                            </div>
                        </div>

                        <p>Уважаемый,</p>
                        <p>{{ emailRead.subject }}</p>
                        <p>
                            Вы можете воспользоваться подпиской сразу после оплаты услуги банковской картой.
                            Пожалуйста - не затягивайте.
                            Удачного дня - Ваше сервис ТМТ
                        </p>
                        <p>С уважением,</p>
                        <hr />
                        <h5 class="mb-3">Документы</h5>
                        <div class="row">
                            <div class="col-xl-4">
                                <div class="card mb-1 shadow-none border">
                                    <div class="p-2">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <div class="avatar-sm">
                                                    <span class="avatar-title bg-soft-primary text-primary rounded">.ZIP</span>
                                                </div>
                                            </div>
                                            <div class="col pl-0">
                                                <a href="javascript:void(0);" class="text-muted font-weight-semibold">Оферта договор.zip</a>
                                                <p class="mb-0">2.3 MB</p>
                                            </div>
                                            <div class="col-auto">
                                                <!-- Button -->
                                                <a href="javascript:void(0);" class="btn btn-link btn-lg text-muted">
                                                    <i class="ri-download-2-line"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end col -->
                            <div class="col-xl-4">
                                <div class="card mb-1 shadow-none border">
                                    <div class="p-2">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <div class="avatar-sm">
                                                    <span class="avatar-title bg-soft-success text-success rounded">.JPG</span>
                                                </div>
                                            </div>
                                            <div class="col pl-0">
                                                <a href="javascript:void(0);" class="text-muted font-weight-semibold">Скан медкнижки.jpg</a>
                                                <p class="mb-0">3.25 MB</p>
                                            </div>
                                            <div class="col-auto">
                                                <!-- Button -->
                                                <a href="javascript:void(0);" class="btn btn-link btn-lg text-muted">
                                                    <i class="ri-download-2-line"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end col -->
                            <div class="col-xl-4">
                                <div class="card mb-0 shadow-none border">
                                    <div class="p-2">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <div class="avatar-sm">
                                                    <span class="avatar-title bg-secondary rounded">.MP4</span>
                                                </div>
                                            </div>
                                            <div class="col pl-0">
                                                <a href="javascript:void(0);" class="text-muted font-weight-semibold">Инструкция как работать с системой.mp4</a>
                                                <p class="mb-0">7.05 MB</p>
                                            </div>
                                            <div class="col-auto">
                                                <!-- Button -->
                                                <a href="javascript:void(0);" class="btn btn-link btn-lg text-muted">
                                                    <i class="ri-download-2-line"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end col -->
                        </div>
                        <div class="mt-5">
                            <a href class="btn btn-secondary mr-2">
                                <i class="mdi mdi-reply mr-1"></i> Reply
                            </a>
                            <a href class="btn btn-light">
                                Forward
                                <i class="mdi mdi-forward ml-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- card -->
            </div>
            <!-- end Col-9 -->
        </div>
    </div>
</div>
</template>
