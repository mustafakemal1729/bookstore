<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end" style="cursor: pointer;">
            <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                <a class="page-link" aria-label="Previous" @:click="gotoPage(currentPage - 1)">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item" v-for="page in totalPages" :key="page" :class="{ 'active': currentPage === page }">
                <a class="page-link" @click="gotoPage(page)"> {{ page }} </a>
            </li>
            <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                <a href="#" class="page-link" @:click="gotoPage(currentPage + 1)" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Pagination",
    emits: ['next-page'],
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            required: true
        }
    },
    methods: {
        gotoPage(page) {
            this.$emit("next-page", page);
        }
    }
};
</script>

<style lang="scss" scoped></style>
