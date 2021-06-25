import { Component, Vue } from 'vue-property-decorator';
import LoginDialog from '@/components/dialog/LoginDialog.vue';
import ConfirmationDialog from '@/components/dialog/ConfirmationDialog.vue';
import AuthStore from '@/store/modules/auth/auth-module';

@Component({
  components: {
    LoginDialog,
    ConfirmationDialog,
  },
})
export default class DashboardLayout extends Vue {
  drawer = true;

  showConfirmation = false;

  loginDialog = false;

  navigationDrawerItems = [
    { title: 'Início', icon: 'mdi-view-dashboard', routerName: 'inicio' },
    { title: 'Carrinho', icon: 'mdi-cart', routerName: 'carrinho' },
    { title: 'Painel Administrador', icon: 'mdi-security', routerName: 'painel-adm' },
  ];

  async logoff(): void {
    await AuthStore.logoff();
    this.showConfirmation = false;
  }

  get isLogged(): boolean {
    return AuthStore.isSigned;
  }

  get isLoading(): boolean {
    return AuthStore.isLoading;
  }
}
