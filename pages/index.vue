<template>
    <div class="home">
        <Sidebar class="sidebar" />
        
        <Navigation />
    </div>

</template>

<script>
    import Sidebar from '../components/Sidebar.vue';
    import Navigation from '../components/Navigation.vue';

    export default {
        name: 'Home',
        components: {
            Sidebar,
            Navigation,
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
    }
</style>