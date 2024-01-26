<template>
    <section>
        <div class="container">
            <SectionHeader title="books" message="section header ogreniyoruz" />
            <BookList :books="books"/>
        </div>
    </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import BookList from '@/components/BookList.vue';
import books from '@/db.js';
export default {
    name: "books",
    components: {
        SectionHeader,
        BookList,
    },
    data(){
        return {
            books: books
        }
    }
}
</script>

<style scoped></style>