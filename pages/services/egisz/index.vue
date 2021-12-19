<script>
import {
    patientsData
} from "./data";


export default {
    head() {
        return {
            title: `${this.title} | Карманный Медик`,
        };
    },
    data() {
        return {
            patientsData: patientsData,
            title: "Доступ к электронным картам",
            items: [
                {
                    text: "Сервисы"
                },
                {
                    text: "ЕГИСЗ",
                    active: true
                }
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "id",
            sortDesc: false,
            fields: [{
                    key: "check",
                    label: ""
                },
                {
                    key: "id",
                    label: "id",
                    sortable: true
                },
                {
                    key: "name",
                    label: "Пациент",
                    sortable: true
                },
                {
                    key: "age",
                    label: "Возраст",
                    sortable: true
                },
                {
                    key: "diagnose",
                    label: "Диагноз",
                    sortable: true
                },
                {
                    key: "state",
                    label: "Состояние",
                    sortable: true
                },
                {
                    key: "last_visit",
                    label: "Дата последнего посещения",
                    sortable: true
                },
                {
                    key: "last_data_update",
                    label: "Дата последнего сбора данных",
                    sortable: true
                },
                {
                    key: "tmt_online",
                    label: "TMT-монитор",
                    sortable: true
                },
            ]
        };
    },
    computed: {
        /**
         * Total no. of records
         */
        rows() {
            return this.patientsData.length;
        }
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length;
    },
    methods: {
        /**
         * Search the table data with search input
         */
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        }
    },
    middleware: 'router-auth',
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <div class="row">
                            <div class="col-md-6 col-xl-3">
                                <div class="py-1">
                                <i class="fe-users font-20"></i>
                                    <h3>200</h3>
                                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                        Всего пациентов
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="py-1">
                                <i class="fe-alert-triangle font-20"></i>
                                    <h3 class="text-danger">7</h3>
                                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                        В критическом состоянии
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="py-1">
                                <i class="fe-info font-20"></i>
                                    <h3 class="text-warning">92</h3>

                                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                        Отклонение от нормы
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="py-1">
                                <i class="fe-shield font-20"></i>
                                    <h3 class="text-success">101</h3>

                                    <p class="text-uppercase mb-1 font-13 font-weight-medium">
                                        В норме
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row mb-2">
                        <div class="col-sm-12 col-md-6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Display&nbsp;
                                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;Tickets
                                </label>
                            </div>
                        </div>
                        <!-- Search -->
                        <div class="col-sm-12 col-md-6">
                            <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                                <label class="d-inline-flex align-items-center">
                                    Search:
                                    <b-form-input v-model="filter" type="search" placeholder="Search..." class="form-control form-control-sm ml-2"></b-form-input>
                                </label>
                            </div>
                        </div>
                        <!-- End search -->
                    </div>

                    <b-table table-class="table table-centered w-100" thead-tr-class="bg-light" :items="patientsData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                        <template v-slot:cell(id)="data">
                            <b> {{data.item.id}}</b>
                        </template>
                        <template v-slot:cell(name)="data">
                            <img :src="data.item.avatar" alt="contact-img" title="contact-img" class="avatar-sm rounded-circle img-thumbnail">
                            <a :href="data.item.link">{{ data.item.name }}</a>
                        </template>

                        <template v-slot:cell(age)="data">
                            {{ data.item.age }}
                        </template>

                        <template v-slot:cell(diagnose)="data">
                            <a :href="data.item.link">{{ data.item.diagnose }}</a>
                        </template>

                        <template v-slot:cell(state)="data">
                            <span class="badge" :class="{'badge-danger': data.item.state === 'В критическом состоянии',
                            'badge-warning': data.item.state === 'Отклонение от нормы',
                            'badge-success': data.item.state === 'В норме'}">{{ data.item.state }}</span>
                        </template>

                        <template v-slot:cell(last_visit)="data">
                            {{ data.item.last_visit }}
                        </template>
                        <template v-slot:cell(last_data_update)="data">
                            {{ data.item.last_data_update }}
                        </template>
                        <template v-slot:cell(tmt_online)="data">
                            <span class="badge" :class="{'badge-success': data.item.tmt_online === 'Online',
                            'badge-secondary': data.item.tmt_online === 'Offline'}">{{ data.item.tmt_online }}</span>
                        </template>
                    </b-table>

                    <div class="row">
                        <div class="col">
                            <div class="dataTables_paginate paging_simple_numbers float-right">
                                <ul class="pagination pagination-rounded">
                                    <!-- pagination -->
                                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
