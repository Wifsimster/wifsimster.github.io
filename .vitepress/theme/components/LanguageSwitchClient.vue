<template>
  <div class="vp-locale-switch">
    <button
      class="vp-locale-switch-button"
      :aria-label="currentLocaleLabel"
      @click="toggleDropdown"
      ref="buttonRef"
    >
      <span class="vp-locale-switch-label">{{ currentLocaleLabel }}</span>
      <svg
        class="vp-locale-switch-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    </button>
    <div
      class="vp-locale-switch-dropdown"
      v-show="isOpen"
      ref="dropdownRef"
    >
      <a
        v-for="link in localeLinks"
        :key="link.link"
        :href="link.link"
        class="vp-locale-switch-item"
        :class="{ active: isCurrentLocale(link.link) }"
        @click="closeDropdown"
      >
        {{ link.text }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const isOpen = ref(false)
const buttonRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)

const localeLinks = computed(() => {
  return [
    { text: 'Français', link: '/' },
    { text: 'English', link: '/en/' }
  ]
})

const currentLocaleLabel = computed(() => {
  const currentPath = route.path
  return currentPath.startsWith('/en') ? 'EN' : 'FR'
})

const isCurrentLocale = (link: string) => {
  const currentPath = route.path
  if (link === '/') {
    return !currentPath.startsWith('/en')
  }
  return currentPath.startsWith(link)
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

onMounted(() => {
  const injectIntoNavbar = () => {
    const actions = document.querySelector('.VPNavBarActions')
    const switcher = buttonRef.value?.closest('.vp-locale-switch')
    
    if (actions && switcher) {
      // Check if already in actions
      if (actions.contains(switcher)) {
        return true
      }
      
      // Remove from current parent if it exists
      if (switcher.parentElement) {
        switcher.parentElement.removeChild(switcher)
      }
      
      // Find dark mode toggle and insert before it
      const darkToggle = actions.querySelector('.VPNavBarAppearance')
      if (darkToggle) {
        actions.insertBefore(switcher, darkToggle)
      } else {
        // If no dark toggle found, append to end
        actions.appendChild(switcher)
      }
      return true
    }
    return false
  }
  
  // Try multiple times with delays
  nextTick(() => {
    if (!injectIntoNavbar()) {
      setTimeout(() => {
        if (!injectIntoNavbar()) {
          setTimeout(() => injectIntoNavbar(), 500)
        }
      }, 100)
    }
  })
  
  // Also listen for clicks outside
  document.addEventListener('click', (e: MouseEvent) => {
    if (
      buttonRef.value &&
      dropdownRef.value &&
      !buttonRef.value.contains(e.target as Node) &&
      !dropdownRef.value.contains(e.target as Node)
    ) {
      isOpen.value = false
    }
  })
})
</script>

<style scoped>
.vp-locale-switch {
  position: relative;
}

.vp-locale-switch-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: var(--vp-c-text-1);
  transition: all 0.2s;
}

.vp-locale-switch-button:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.vp-locale-switch-label {
  font-weight: 500;
}

.vp-locale-switch-icon {
  width: 14px;
  height: 14px;
  opacity: 0.7;
}

.vp-locale-switch-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 120px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 100;
  overflow: hidden;
}

.vp-locale-switch-item {
  display: block;
  padding: 8px 16px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: background-color 0.2s;
  cursor: pointer;
}

.vp-locale-switch-item:hover {
  background: var(--vp-c-bg-soft);
}

.vp-locale-switch-item.active {
  color: var(--vp-c-brand);
  font-weight: 500;
  background: var(--vp-c-bg-soft);
}

@media (max-width: 768px) {
  .vp-locale-switch-button {
    padding: 6px 10px;
  }
  
  .vp-locale-switch-label {
    display: none;
  }
}
</style>
