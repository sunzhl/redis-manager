import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Dashboard from '@/components/dashboard/Dashboard'
import Monitor from '@/components/monitor/Monitor'
import Manage from '@/components/manage/ClusterManage'
import Installation from '@/components/install/Installation'
import ChannelManage from '@/components/alert/ChannelManage'
import RuleManage from '@/components/alert/RuleManage'
import AlertManage from '@/components/alert/AlertManage'
import GroupManage from '@/components/group/GroupManage'
import UserManage from '@/components/user/UserManage'
import Profile from '@/components/user/Profile'
import DataOperation from '@/components/tool/DataOperation'

Vue.use(Router)

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          name: 'dashboard',
          path: '/dashboard',
          component: Dashboard,
          meta: {
            title: 'Dashboard',
            icon: 'el-icon-discover',
            noCache: true,
            affix: false
          }
        },
        {
          name: 'monitor',
          path: '/monitor',
          component: Monitor,
          meta: {
            title: 'Monitor',
            icon: 'el-icon-view',
            noCache: true,
            affix: false
          }
        },
        {
          name: 'manage',
          path: '/manage',
          component: Manage,
          meta: {
            title: 'Cluster Manage',
            icon: 'el-icon-view',
            noCache: true,
            affix: false
          }
        },
        {
          name: 'installation',
          path: '/installation',
          component: Installation,
          meta: {
            title: 'Installation',
            icon: 'el-icon-view',
            noCache: true,
            affix: false
          }
        },
        {
          name: 'channel-manage',
          path: '/channel-manage',
          component: ChannelManage,
          meta: {
            title: 'Channel Manage',
            icon: 'el-icon-view',
            noCache: true,
            affix: false
          }
        }, {
          name: 'rule-manage',
          path: '/rule-manage',
          component: RuleManage,
          meta: {
            title: 'Rule Manage',
            icon: 'el-icon-view',
            noCache: true,
            affix: false
          }
        }, {
          name: 'alert-manage',
          path: '/alert-manage',
          component: AlertManage,
          meta: {
            title: 'Alert Manage',
            icon: 'el-icon-view',
            noCache: true,
            affix: false
          }
        }, {
          name: 'group-manage',
          path: '/group-manage',
          component: GroupManage,
          meta: {
            title: 'Group Manage',
            icon: 'el-icon-view',
            noCache: true,
            affix: false
          }
        },{
          name: 'user-manage',
          path: '/user-manage',
          component: UserManage,
          meta: {
            title: 'User Manage',
            icon: 'el-icon-view',
            noCache: true,
            affix: false
          }
        },
        {
          name: 'profile',
          path: '/profile',
          component: Profile,
          meta: {
            title: 'User Profile',
            icon: 'el-icon-view',
            noCache: true,
            affix: false
          }
        },
        {
          name: 'data-operation',
          path: '/data-operation',
          component: DataOperation,
          meta: {
            title: 'Data Operation',
            icon: 'el-icon-view',
            noCache: true,
            affix: false
          }
        }
      ]
    }
  ]
})
