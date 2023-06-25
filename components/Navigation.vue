<template>
    <div class="navigation">
        <div class="bar">
            <Icon name="ph:house-thin" class="icon" />
            <Icon name="ph:user-light" class="icon" />
            <Icon name="ph:suitcase-simple-thin" class="icon" />
            <Icon name="ph:stack-fill" class="icon" />
            <Icon name="ph:navigation-arrow-thin" class="icon" />

        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~/assets/global.less";

.navigation {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;

    .bar {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 300px;
        border: 1px solid @secondary;
        padding: 20px;
        border-radius: 50px;
        transition: .2s ease-out;


        .icon {
            font-size: 26px;
            font-weight: 100;
            transition: .3s ease;

        }

        .icon:hover {
            cursor: pointer;
            color: @primary;
            transition: .3s ease;
        }
    }

    .bar:hover {
        transition: .2s ease-in;
        box-shadow: 0px 0px 20px 1px rgba(228, 175, 18, 0.48);
    }
}</style>