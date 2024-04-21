---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'
//https://flowbite.com/icons/
const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/2129872',
    name: 'Marabesi',
    title: '',
    links: [
      { icon: 'github', link: 'https://github.com/marabesi' },
      { icon: 'twitter', link: 'https://twitter.com/MatheusMarabesi' },
      { icon: {
        svg: '<svg class="w-[36px] h-[36px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M11.403 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.403a3.01 3.01 0 0 1-1.743-1.612l-3.025 3.025A3 3 0 1 1 9.99 9.768l3.025-3.025A3.01 3.01 0 0 1 11.403 5Z" clip-rule="evenodd"/> <path fill-rule="evenodd" d="M13.232 4a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v5.768a1 1 0 1 1-2 0V6.414l-6.182 6.182a1 1 0 0 1-1.414-1.414L17.586 5h-3.354a1 1 0 0 1-1-1Z" clip-rule="evenodd"/> </svg>'
      }, link: 'https://marabesi.com' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/6353105?v=4',
    name: 'Emmanuel Valverde Ramos',
    title: '',
    links: [
      { icon: 'github', link: 'https://github.com/khru' },
      { icon: 'twitter', link: 'https://twitter.com/evrtrabajo' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead></template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>