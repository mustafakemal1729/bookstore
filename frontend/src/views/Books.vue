<template>
    <section>
        <div class="container">
            <SectionHeader title="books" message="section header ogreniyoruz" />
            <BookList />
        </div>
    </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import BookList from '@/components/BookList.vue';
export default {
    name: "books",
    components: {
        SectionHeader,
        BookList,
    }
}
</script>

<style scoped>

</style>