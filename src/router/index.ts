import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Post from '@/views/Post.vue'
import Archives from '@/views/Archives.vue'
import Tag from '@/views/Tag.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/en',
      name: 'HomeEn',
      component: Home
    },
    {
      path: '/posts/:slug',
      name: 'Post',
      component: Post
    },
    {
      path: '/en/posts/:slug',
      name: 'PostEn',
      component: Post
    },
    {
      path: '/archives',
      name: 'Archives',
      component: Archives
    },
    {
      path: '/en/archives',
      name: 'ArchivesEn',
      component: Archives
    },
    {
      path: '/tags/:tag',
      name: 'Tag',
      component: Tag
    },
    {
      path: '/en/tags/:tag',
      name: 'TagEn',
      component: Tag
    }
  ]
})

export default router
