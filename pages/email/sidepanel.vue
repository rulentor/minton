<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

/**
 * Side-panel component
 */
export default {
    components: {
        ckeditor: CKEditor.component
    },
    data() {
        return {
            showModal: false,
            editor: ClassicEditor,
            editorData: "<p>Content of the editor.</p>"
        };
    }
};
</script>

<template>
<div class="inbox-leftbar">
    <b-button block variant="danger" @click="showModal = true">Создать</b-button>
    <div class="mail-list mt-4">
        <router-link tag="a" to="/email/inbox" class="text-danger">
            <i class="ri-inbox-fill align-bottom mr-2"></i>Важные
            <span class="badge badge-soft-danger float-right ml-2">7</span>
        </router-link>

        <router-link tag="a" to="/email/inbox">
            <i class="ri-star-line align-bottom mr-2"></i>Анализы
        </router-link>
        <a href="javascript: void(0);"><i class="ri-time-line align-bottom mr-2"></i>Брони и записи</a>
        <a href="javascript: void(0);"><i class="ri-file-list-2-line align-bottom mr-2"></i>Медсправки<span class="badge badge-soft-info float-right ml-2">32</span></a>
        <a href="javascript: void(0);"><i class="ri-send-plane-2-line align-bottom mr-2"></i>Мои заявления</a>
        <a href="javascript: void(0);"><i class="ri-delete-bin-line align-bottom mr-2"></i>Корзина</a>
        <a href="javascript: void(0);"><i class="ri-price-tag-3-line align-bottom mr-2"></i>Архив</a>
        <a href="javascript: void(0);"><i class="ri-error-warning-line align-bottom mr-2"></i>Подписки</a>
    </div>

    <h6 class="mt-4">Labels</h6>

    <div class="list-group b-0 mail-list">
        <a href="#" class="list-group-item border-0"><span class="mdi mdi-circle text-info mr-2"></span>Подписки</a>
        <a href="#" class="list-group-item border-0"><span class="mdi mdi-circle text-warning mr-2"></span>Возвраты</a>
        <a href="#" class="list-group-item border-0"><span class="mdi mdi-circle text-dark mr-2"></span>Баланс кошелька</a>
        <a href="#" class="list-group-item border-0"><span class="mdi mdi-circle text-primary mr-2"></span>Жалобы</a>
        <a href="#" class="list-group-item border-0"><span class="mdi mdi-circle text-success mr-2"></span>Семейный пакет</a>
    </div>

    <b-modal v-model="showModal" title="Новое" centered>
        <form>
            <div class="form-group">
                <input type="email" class="form-control" placeholder="To" />
            </div>

            <div class="form-group">
                <input type="text" class="form-control" placeholder="Subject" />
            </div>
            <div class="form-group">
                <ckeditor v-model="editorData" :editor="editor"></ckeditor>
            </div>
        </form>
        <template v-slot:modal-footer>
            <b-button variant="secondary" @click="showModal = false">Закрыть</b-button>
            <b-button variant="primary">
                Send
                <i class="fab fa-telegram-plane ml-1"></i>
            </b-button>
        </template>
    </b-modal>
</div>
</template>
