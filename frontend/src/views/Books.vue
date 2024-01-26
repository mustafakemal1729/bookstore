<template>
    <section>
        <div class="container">
            <SectionHeader title="books" message="food for mind" />
            <BookList :books="books" />
            <Pagination />
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
            books: books
        }
    }
}
</script>

<style scoped></style>