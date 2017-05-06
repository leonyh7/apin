<template>
    <div class="app-wrapper">
        <Navbar/>
        <main :class="{hideSidebar:!sidebar.opened}">
            <div class="sidebar-wrapper">
                <Sidebar class="sidebar-container" />
            </div>
            <div class="main-container">
                <App-main/>
            </div>
            <div class="apin-setting-detail">
                <i class="icon-close"></i>
                <div class="apin-setting-title">门户设置</div>
                <div class="apin-setting-content">
                    <div class="apin-setting-item">
                        设置1
                    </div>
                    <span class="field-label">换肤:</span>
                    <el-switch v-model="theme" on-text="" off-text="">
                    </el-switch>
                </div>
                <div class="apin-setting-option">
                    <el-button type="primary">确认</el-button>
                    <el-button>取消</el-button>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from 'views/layout';
import { toggleClass } from 'utils';
import store from 'store';
import router from 'router';
import permission from 'store/permission';
// import { Loading } from 'element-ui';
// let loadingInstance;
export default {
    name: 'layout',
    components: {
        Navbar,
        Sidebar,
        AppMain
    },
    data() {
        return {
            theme: ''
        }
    },
    computed: {
        sidebar() {
            return this.$store.state.app.sidebar;
        }
    },
    watch: {
        theme() {
            toggleClass(document.body, 'custom-theme')
        }
    },
    beforeRouteEnter: (to, from, next) => {
        const roles = store.getters.roles;
        if (roles.length !== 0) {
            next();
            return
        }

        // loadingInstance = Loading.service({ fullscreen: true, text: '玩命加载中' });
        store.dispatch('GetInfo').then(() => {
            permission.init({
                roles: store.getters.roles,
                router: router.options.routes
            });
            //   loadingInstance.close();
            next();
        }).catch(err => {
            //   loadingInstance.close();
            console.log(err);
        });
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    main {
        display: flex;
        flex: 1;
        position: relative;
        &.hideSidebar {
            .sidebar-wrapper {
                transform: translate(-140px, 0);
                .sidebar-container {
                    transform: translate(132px, 0);
                }
                &:hover {
                    transform: translate(0, 0);
                    .sidebar-container {
                        transform: translate(0, 0);
                    }
                }
            }
        }
    }
    .sidebar-wrapper {
        width: 180px;
        overflow-x: hidden;
        overflow-y: auto;
        transition: all .28s ease-out;
        @include scrollBar;
    }
    .sidebar-container {
        transition: all .28s ease-out;
    }
    .main-container {
        flex: 1;
        overflow-y: auto;
        transition: all .28s ease-out;
        @include scrollBar;
    }
    .apin-setting-detail {
        position: absolute;
        top: 0;
        right: 0;
        width: 340px;
        height: 100%;
        box-sizing: border-box;
        padding: 0 25px 25px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .12);
        display: flex;
        flex-direction: column;
    }
    .apin-setting-title {
        margin: 25px 0 10px;
        flex: none;
        border-bottom: 1px solid #d1dbe5;
    }
    .apin-setting-content {
        flex: 1;
    }
    .apin-setting-item {
        margin: 10px 0;
    }
    .apin-setting-option {
        flex: none;
    }
}
</style>
