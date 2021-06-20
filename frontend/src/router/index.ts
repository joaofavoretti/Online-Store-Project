import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import DashboardLayout from '@/components/layout/DashboardLayout.vue';
import Inicio from '@/views/Inicio/Inicio.vue';
import TodoList from '@/views/TodoList.vue';
import FormScreen from '@/views/FormScreen.vue';

Vue.use(VueRouter);

/* Define routes used in the program. Imported objects can be imported here. */
export const routes: Array<RouteConfig> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardLayout,
    meta: { requiresAuth: false },
    children: [
      { path: 'inicio', name: 'inicio', component: Inicio },
      { path: 'form-screen', name: 'form-screen', component: FormScreen },
      { path: 'todo-list', name: 'todo-list', component: TodoList },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
