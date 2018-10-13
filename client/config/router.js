import Router from 'vue-router'

import routers from './router'

export default () => {
  return new Router({
    routers
  })
}
