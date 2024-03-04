<template>
    <nav class="navbar navbar-expand-md custom-nav">
        <div class="container">
            <RouterLink class="navbar-brand" to="/">BookStore</RouterLink>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink class="nav-link" v-bind:to="{ name: 'home' }">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" v-bind:to="{ name: 'books' }">Books</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" v-bind:to="{ name: 'contact' }">Contact</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" v-bind:to="{ name: 'login' }">Login</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" v-bind:to="{ name: 'register' }">Register</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "NavBar",
    components: { RouterLink }
}
</script>
<style scoped>
.custom-nav {
    background-color: var(--primary-color);
    padding: 15px 0;
}

.navbar-brand {
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
}

.nav-link {
    padding: 10px 25px;
    color: #fff;
    text-align: center;
}

.nav-link:hover {
    color: aqua;
}

.active-link {
    color: red;
}
</style>
