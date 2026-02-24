import {
  IconAccessPoint,
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconNotification,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff
} from '@tabler/icons-react'
import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
import { type SidebarData } from '../types'

const APP_NAME = import.meta.env.VITE_APP_NAME || 'Shadcn Admin'
const APP_SUBTITLE = import.meta.env.VITE_APP_SUBTITLE || 'Admin Dashboard'
export const sidebarData: SidebarData = {
  user: {
    name: 'samir',
    visible: true,
    email: 'admin@admin.com',
    avatar: '/avatars/shadcn.jpg',
  },
  header: {
    logo: GalleryVerticalEnd,
    visible: true,
    title: APP_NAME,
    subtitle: APP_SUBTITLE,
  },
  teams: [
    {
      name: 'ShadcnAdminBike',
      visible: true,
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      visible: true,
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      visible: true,
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],

  navGroups: [

    {
      title: 'General',
      visible: true,
      items: [
        {
          title: 'Dashboard',
          visible: true,
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Help Center',
          visible: true,
          url: '/help-center',
          icon: IconHelp,
        },


      ],
    },
    {
      title: 'Administration',
      visible: true,
      items: [
        {
          title: 'User',
          url: '/administration/user',
          visible: true,
          icon: IconUserCog,
        },
        {
          title: 'App Module  ',
          url: '/administration/app_module',
          visible: true,
          icon: IconUserCog,
        },
      ],
    },
    {
      title: 'Masters',
      visible: true,
      items: [
        {
          title: 'Organization',
          visible: true,
          icon: IconAccessPoint,
          items: [
            {
              title: 'Company',
              visible: true,
              url: '/masters/organization/company',
              icon: IconUserCog,
            },
            {
              title: 'Branch',
              visible: false,
              url: '/masters/organization/branch',
              icon: IconUserCog,
            },
            {
              title: 'Financial Year',
              visible: false,
              url: '/masters/organization/financial_year',
              icon: IconUserCog,
            },
            {
              title: 'Currency',
              visible: true,
              url: '/masters/organization/currency',
              icon: IconUserCog,
            },
            {
              title: 'Country',
              visible: true,
              url: '/masters/organization/country',
              icon: IconUserCog,
            },
            {
              title: 'State',
              visible: true,
              url: '/masters/organization/state',
              icon: IconUserCog,
            },


          ]
        },

        {
          title: 'Payroll',
          visible: true,
          icon: IconAccessPoint,
          items: [
            {
              title: 'Employee',
              visible: true,
              url: '/masters/payroll/employee',
              icon: IconUserCog,
            },
            {
              title: 'Department',
              visible: true,
              url: '/masters/payroll/department',
              icon: IconUserCog,
            },
            {
              title: 'Designation',
              visible: true,
              url: '/masters/payroll/designation',
              icon: IconUserCog,
            },

          ]
        },

      ],
    },
    {
      title: 'Pages',
      visible: false,
      items: [
        {
          title: 'Auth',
          icon: IconLockAccess,
          items: [
            {
              title: 'Sign In',
              url: '/sign-in',
            },
            {
              title: 'Sign In (2 Col)',
              url: '/sign-in-2',
            },
            {
              title: 'Sign Up',
              url: '/sign-up',
            },
            {
              title: 'Forgot Password',
              url: '/forgot-password',
            },
            {
              title: 'OTP',
              url: '/otp',
            },
          ],
        },
        {
          title: 'Errors',
          icon: IconBug,
          items: [
            {
              title: 'Unauthorized',
              url: '/401',
              icon: IconLock,
            },
            {
              title: 'Forbidden',
              url: '/403',
              icon: IconUserOff,
            },
            {
              title: 'Not Found',
              url: '/404',
              icon: IconError404,
            },
            {
              title: 'Internal Server Error',
              url: '/500',
              icon: IconServerOff,
            },
            {
              title: 'Maintenance Error',
              url: '/503',
              icon: IconBarrierBlock,
            },
          ],
        },
      ],
    },

    {
      title: 'Other',
      visible: true,
      items: [
        {
          title: 'Settings',
          visible: true,
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              visible: true,
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Account',
              visible: true,
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'Appearance',
              visible: true,
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Notifications',
              visible: true,
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'Display',
              visible: true,
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },

      ],
    },
  ],
}
