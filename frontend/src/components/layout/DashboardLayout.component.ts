import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DashboardLayout extends Vue {
  drawer = true;

  navigationDrawerItems = [
    { title: 'Início', icon: 'mdi-view-dashboard', routerName: 'inicio' },
    { title: 'Carrinho', icon: 'mdi-cart', routerName: 'carrinho' },
    { title: 'Conta', icon: 'mdi-account-circle', routerName: 'todo-list' },
    { title: 'Painel Administrador', icon: 'mdi-security', routerName: 'todo-list' },
  ]
}
