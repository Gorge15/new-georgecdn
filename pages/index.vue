<template>
    <div class="home" @onScroll="handleScroll">
        <Sidebar class="sidebar" />
        <div class="scroll">
            <!-- <Home /> -->
            <component id="home" :is="currentComponent"></component>
        </div>
        <Navigation />
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Navigation from '../components/Navigation.vue';
import Home from '~/components/content/Home.vue';

export default {
    name: 'Home',
    components: {
        Sidebar,
        Navigation,
    },

    data() {
        return {
            currentComponent: Home,
            currentPos: null,
        }
    },

    methods: {
        handleScroll(event) {
            // Your scroll handling here
            let delta = event.deltaY;
            if (delta < 0) {
                console.log('scroll up');

            } else {
                console.log('scroll down');
            }
        }
    },

    mounted() {

    },

    beforeMount() {
        window.addEventListener('wheel', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('wheel', this.handleScroll)
    }
}

</script>

<style lang="less">
.home {
    width: 100%;
    height: 100svh;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .sidebar {
        width: 450px;
        height: 100%;
        padding: 65px 25px;

    }

    .component {
        width: 70%;
        height: 100%;
        padding: 65px 25px;
        border: 1px solid red;
    }

    .scroll {
        padding: 25px;
        margin: 25px;
        width: 70%;
        height: 90%;
        overflow: hidden;
        overflow-y: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    .scroll::-webkit-scrollbar {
        display: none;
    }
}
</style>