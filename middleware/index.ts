export default defineNuxtRouteMiddleware((to, from) => {
  // 默认路由跳转为/home
  if (to.path === '/') {
    return navigateTo('/home')
  }
})