import Cookies from 'js-cookie';

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    theme: 'default',
    livenewsChannels: Cookies.get('livenewsChannels') || '[]',
    setting: {
      opened: !+Cookies.get('settingStatus')
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1);
      } else {
        Cookies.set('sidebarStatus', 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
    },
    SET_LIVENEWS_CHANNELS: (status, channels) => {
      status.livenewsChannels = JSON.stringify(channels);
      Cookies.set('livenewsChannels', JSON.stringify(channels));
    },
    TOGGLE_Setting: state => {
      if (state.setting.opened) {
        Cookies.set('settingStatus', 1);
      } else {
        Cookies.set('settingStatus', 0);
      }
      state.setting.opened = !state.setting.opened;
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    ToggleSetting: ({ commit }) => {
      commit('TOGGLE_Setting')
    },
    setTheme: ({ commit }, theme) => {
      commit('SET_THEME', theme)
    },
    setlivenewsChannels: ({ commit }, channels) => {
      commit('SET_LIVENEWS_CHANNELS', channels)
    }
  }
};

export default app;
