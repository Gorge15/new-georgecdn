<template>
    <div class="sidebar">
       <div class="card">
            <div class="title">
                <span class="first">GeorgeCDn</span>
                <div class="second">
                    <span class="primu">Fullstack</span>
                    <span>Developer</span>
                </div>
            </div>
            <div class="avatar">
                <img src="../assets/images/avatar.jpg" alt="avatar">
                
            </div>

            <div class="description">
                <span class="name">George</span>
                <span>Bucharest, Romania <Icon name="circle-flags:ro" /></span>

            </div>

            <div class="media">
                <Icon @click="sendMedia(media.instagram)" name="uil:instagram" class="icon"/>
                <Icon @click="sendMedia(media.linkedin)" name="uil:linkedin" class="icon"/>
                <Icon @click="sendMedia(media.github)" name="uil:github" class="icon"/>
            </div>

            <div class="contact">
                <button @click="sendEmail()">Contact me</button>
            </div>

            <div class="copyright">
                &copy; 2023 <span @click="sendMedia(media.website)">georgecdn.ro</span>. All rights reserved.
            </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        data() {
            return {
                email: 'contact@georgecdn.ro',
                media: {
                    website: 'https://georgecdn.ro/',
                    instagram: 'https://www.instagram.com/george._1506/',
                    github: 'https://github.com/Gorge15',
                    linkedin: 'https://www.linkedin.com/in/georgian-ciobotaru-672b9021a/'
                }
            }
        },
        methods: {
            sendEmail() {
                let href = `mailto:${this.email}`;
                return window.open(href, '_blank');
            },

            sendMedia(media) {
                return window.open(media, "_blank");
            }

        }
    }

</script>

<style lang="less" scoped>
@import "~/assets/global.less";
    .sidebar {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 25px;
        .card {
            box-sizing: border-box;
            border: .5px solid @secondary;
            width: 100%;
            height: 100%;
            border-radius: 25px;
            padding: 25px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            .title {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: @white;
                .first {
                    font-size: 20px;
                    font-weight: 800;
                }
                .second {
                    display: flex;
                    flex-direction: column;
                    text-align: end;
                    justify-content: flex-end;
                    font-size: 14px;
                    .primu {
                        font-size: 18px;
                    }
                }
            }

            .avatar {
                width: 100%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-direction: column;
                gap: 10px;
                img {
                    width: 80%;
                    border-radius: 50%;

                }
            }

            .description {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: @white;
                .name  {
                    font-size: 24px
                }
            }

            .media {
                width: 100%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                .icon {
                    font-size: 38px;
                    box-sizing: border-box;
                    border: 1px solid @secondary;
                    border-radius: 50%;
                    padding: 5px;
                    transition: .3s ease;
                }

                .icon:hover {
                    transition: .5s ease;
                    color: @primary;
                    border-color: @primary;
                    cursor: pointer;
                }
            }

            .contact {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                button {
                    outline: none;
                    border: none;
                    width: 80%;
                    padding: 11px 58px 10px;
                    text-transform: uppercase;
                    border-radius: 25px;
                    border: 2px solid @primary;
                    background-color: @primary;
                    font-size: 16px;
                    text-align: center;
                    align-content: center;
                    font-weight: 400;
                    transition: .3s ease;
                }

                button:hover {
                    cursor: pointer;
                    background-color: @black;
                    color: @primary;
                    transition: .3s ease;
                }
                
            }

            .copyright {
                width: 100%;
                font-size: 12px;
                text-align: center;
                span {
                    color: @primary;
                    cursor: pointer;
                }
            }
        }
    }

    @media only screen and (max-width: 786px) {
        
    }
</style>