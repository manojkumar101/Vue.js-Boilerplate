export default [
  // New design routes starts here...

  {
    path: '/',
    redirect: 'login',
    // redirect: 'login',
  },
  {
    path: '/registration',
    name: 'registration',
    component: () =>
      lazyLoadView(import('./views/pages/registration')),
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      lazyLoadView(import('./views/pages/login')),
  }
]

function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require('../components/HelloWorld').default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 400 
  })

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children)
    },
  })
}
