<template>
    <div class="homepage">
        <div class="title">
            <span>Welcome to my website</span>
        </div>
        <div class="subtitle">
            <span>My name is George</span>
        </div>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
@import "~/assets/global.less";
    .homepage {
        // padding: 25px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .title {
            width: 100%;
            span {
                font-size: 48px;
            }
        }
        
    }
</style>