<template>
    <div class="app-wrapper">
        <Navbar/>
        <main :class="{hideSidebar:!sidebar.opened}">
            <div class="sidebar-wrapper">
                <Sidebar class="sidebar-container"/>
            </div>
            <div class="main-container">
                <App-main/>
            </div>
        </main>
    </div>
</template>

<script>
    import { Navbar, Sidebar, AppMain } from 'views/layout';
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
      computed: {
        sidebar() {
          return this.$store.state.app.sidebar;
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
    }
</style>
