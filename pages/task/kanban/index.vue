<script>
import {
    tasks
} from './data'

/**
 * Kanban-board component
 */
export default {
    head() {
        return {
            title: `${this.title} | Карманный Медик`
        }
    },
    data() {
        return {
            tasks: tasks,
            title: "Перетаскиваемая доска",
            items: [{
                    text: "Начало",
                    href: "/"
                },
                {
                    text: "Приложения",
                    href: "/"
                },
                {
                    text: "Управление задачами",
                    active: true
                }
            ],
            options: {
                dropzoneSelector: '.drag-inner-list',
                draggableSelector: '.drag-item',
            },
        };
    },
    middleware: 'router-auth'
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div v-drag-and-drop:options="options" class="drag-container">
        <div class="row drag-list">
            <div v-for="group in tasks" :key="group.id" class="col-lg-4 drag-column">
                <div class="card">
                    <div class="card-body">
                        <!-- dropdown -->
                        <b-dropdown right variant="black" class="float-right" toggle-class="p-0">
                            <template slot="button-content">
                                <i class="mdi mdi-dots-vertical m-0 text-muted h3"></i>
                            </template>
                            <b-dropdown-item href="javascript: void(0);">Правка</b-dropdown-item>
                            <b-dropdown-item href="javascript: void(0);">Удалить</b-dropdown-item>
                            <b-dropdown-item href="javascript: void(0);">Ещё исполнитель</b-dropdown-item>
                            <b-dropdown-item href="javascript: void(0);">Контроль сроков</b-dropdown-item>
                        </b-dropdown>
                        <span class="drag-column-header">
                            <h4 class="header-title">{{ group.status }}</h4>
                            <p class="sub-header">Постановка задачи</p>
                        </span>

                        <vue-draggable-group v-model="group.items" :groups="tasks" :data-id="group.id">
                            <ul :data-id="group.id" class="sortable-list tasklist list-unstyled ui-sortable drag-inner-list">
                                <li v-for="item in group.items" :key="item.id" :data-id="item.id" class="drag-item ui-sortable-handle" :class="{ 'task-low': `${item.task}` === 'Low',
                'task-high': `${item.task}` === 'High',
                'task-medium': `${item.task}` === 'Medium' }">
                                    <div class="checkbox checkbox-blue mb-2 checkbox-single float-right">
                                        <input type="checkbox" />
                                        <label></label>
                                    </div>
                                    <h5 class="mt-0">
                                        <a href="javascript: void(0);" class="text-dark">{{ item.title }}</a>
                                    </h5>

                                    <p>{{ item.description }}</p>
                                    <div class="clearfix"></div>
                                    <div class="row">
                                        <div class="col-auto">
                                            <a href="javascript: void(0);" class="text-muted">
                                                <img :src="`${ item.user[0] }`" alt="task-user" class="avatar-sm img-thumbnail rounded-circle" />
                                                <img v-if="item.user[1]" :src="`${ item.user[1] }`" alt="task-user" class="avatar-sm img-thumbnail rounded-circle ml-1" />
                                            </a>
                                        </div>
                                        <div class="col">
                                            <div class="text-right">
                                                <p class="font-13 mt-2 mb-0">
                                                    <i class="mdi mdi-calendar"></i>
                                                    {{ item.date }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </vue-draggable-group>
                        <a href="javascript: void(0);" class="btn btn-primary btn-block mt-3">
                            <i class="mdi mdi-plus-circle"></i> Новая задача
                        </a>
                    </div>
                </div>
                <!-- end col-->
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
