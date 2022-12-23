/**
 * @Author: bzirs
 * @Date: 2022-12-22 22:43:57
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-23 22:19:28
 * @FilePath: /vue2-itcast-headlines/src/utils/vant.js
 * @Description: vant
 * @
 * @Copyright (c) 2022 by bzirs, All Rights Reserved.
 */
import Vue from 'vue'
import { Button, Tabbar, TabbarItem, NavBar, Form, Field, Toast, Tab, Tabs, Icon, List, PullRefresh, Cell, CellGroup, Image as VanImage, ActionSheet, Lazyload } from 'vant'

Vue.use(Button)

Vue.use(Tabbar)
Vue.use(TabbarItem)

Vue.use(NavBar)

Vue.use(Form)
Vue.use(Field)

Vue.use(Toast)

Vue.use(Tab)
Vue.use(Tabs)

Vue.use(Icon)

Vue.use(List)

Vue.use(PullRefresh)

Vue.use(Cell)
Vue.use(CellGroup)

Vue.use(VanImage)

Vue.use(ActionSheet)

Vue.use(Lazyload)
Vue.use(Lazyload, {
  lazyComponent: true
})
