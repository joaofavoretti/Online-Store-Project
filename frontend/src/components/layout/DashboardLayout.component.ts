import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DashboardLayout extends Vue {
  drawer = true;

  navigationDrawerItems = [
    { title: 'Início', icon: 'mdi-view-dashboard', routerName: 'inicio' },
    { title: 'Carrinho', icon: 'mdi-cart', routerName: 'carrinho' },
    { title: 'Painel Administrador', icon: 'mdi-security', routerName: 'painel-adm' },
  ];
}
