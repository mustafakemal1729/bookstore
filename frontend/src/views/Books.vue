<template>
    <section>
        <div class="container">
            <SectionHeader title="Books" message="Food for the mind" />
            <BookList :books="paginatedBooks" />
            <Pagination :currentPage="currentPage" :totalPages="totalPages" @next-page="updatePage"/>
        </div>
    </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import BookList from '@/components/BookList.vue';
import books from '@/db.js';
import Pagination from '@/components/Pagination.vue';

export default {
    name: "Books",
    components: {
        SectionHeader,
        BookList,
        Pagination,
    },
    data() {
        return {
            books: [],
            currentPage: 1,
            itemsPerPage: 4,
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.books.length / this.itemsPerPage)
        },
        paginatedBooks() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage
            const endIndex = startIndex + this.itemsPerPage
            return this.books.slice(startIndex, endIndex)
        }
    },
    methods: {
        updatePage(page) {
            this.currentPage = page;
        }
    },
    mounted() {
        // Sort books by rating when the component is mounted
        this.books = books.slice().sort((a, b) => b.rating - a.rating);
    }
}
</script>

<style scoped></style>
