import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue"
import Books from "@/views/Books.vue"
import Contact from "@/views/Contact.vue"
import LoginView from "@/views/LoginView.vue"
import RegisterView from "@/views/RegisterView.vue";
import BookDetailView from "@/views/BookDetailView.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/books",
            name: "books",
            component: Books
        },
        {
            path: "/books/:id",
            name: "book-detail",
            component: BookDetailView
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },
        {
            path: "/login",
            name: "login",
            component: LoginView
        },
        {
            path: "/register",
            name: "register",
            component: RegisterView,
        },
    ],
    linkActiveClass: 'active-link'
});

export default router;