<template>
    <section>
        <div class="container">
            <SectionHeader title="books" message="food for mind" />
            <BookList :books="paginatedBooks" />
            <Pagination :currentPage="currentPage" :totalPages="totalPages" />
        </div>
    </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import BookList from '@/components/BookList.vue';
import books from '@/db.js';
import Pagination from '@/components/Pagination.vue';
export default {
    name: "books",
    components: {
        SectionHeader,
        BookList,
        Pagination,
    },
    data() {
        return {
            books: books,
            currentPage: 1,
            itemsPerPage: 4
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.books.length / this.books.itemsPerPage)
        },
        paginatedBooks() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage
            const endIndex = startIndex + this.itemsPerPage
            return this.books.slice(startIndex, endIndex)
        }
    }
}
</script>

<style scoped></style>