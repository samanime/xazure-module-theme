import Header from './Header.js';
import Nav from './Nav.js';

export default {
  components: {
    'app-nav': Nav,
    'app-header': Header
  },
  computed: {
    current() {
      console.log(this.$router, this.$route);
      return 'a';
    }
  },
  data: () => ({
  }),
  template: `
    <div>
      {{ this.current }}
      <app-nav></app-nav>
      <router-view></router-view>
    </div>
  `
};