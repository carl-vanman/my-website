<template>
    <nav class="nav">
        <ul>
            <li v-on:click="changeState('homeLink')">
                <router-link class="nav__link home" :class="{active: homeLink.active}" to="Home">Home</router-link>
            </li>
            <!-- <li>
                <router-link class="nav__link about" to="About">About</router-link>
            </li> -->
            <li>
                <router-link class="nav__link projects" to="Projects">Projects</router-link>
            </li>
            <li>
                <router-link class="nav__link contact" to="contact">Contact</router-link>
            </li>
            <li class="navItemBottom"><span class="date">2021</span></li>
            <li><span class="konichiwa">こんにちは</span></li>
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
    padding: 35px 0px clamp(15px, 3vw, 35px);
    ul {
        display: flex;
        align-items: center;
        gap: 35px;
        list-style: none;
        writing-mode: vertical-lr;
    }
    .nav__link, span {
    color: var(--light-gray);
    text-decoration: none;
    text-transform: uppercase;
    font-size: var(--font-small);
    font-weight: var(--font-regular);
    }
    .navItemBottom{ margin-top: auto;}

    .konichiwa {
        font-size: clamp(16px, 5vw, 32px);
        letter-spacing: 0.5rem;
        color: white;
    }

    .active {
        color: #E70013;
    }
}
</style>