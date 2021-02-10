<template>
    <nav class="nav">
        <ul>
            <li v-on:click="changeState('homeLink')">
                <router-link class="nav__link home" :class="{active: homeLink.active}" to="Home">Home</router-link>
            </li>
            <li>
                <router-link class="nav__link about" to="About">About</router-link>
            </li>
            <li>
                <router-link class="nav__link projects" to="Projects">Projects</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            homeLink: {
                active: false
            },
            aboutLink: {
                active: false
            },
            projectsLink: {
                active: false
            }
        }
    },
    methods: {
        changeState(link) {
            if(!this[link].active === true){
            this[link].active = !this[link].active;
            }
        }
    } 
}
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    justify-content: center;
    padding-top: 35px;
    ul {
        display: flex;
        gap: 35px;
        list-style: none;
        writing-mode: vertical-lr;
    }
    .nav__link {
    color: var(--light-gray);
    text-decoration: none;
    text-transform: uppercase;
    font-size: var(--font-small);
    font-weight: var(--font-regular);
    }
    .active {
        /* color: #E70013; */
    }
}
</style>