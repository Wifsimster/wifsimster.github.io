import { ref, onMounted, onUnmounted } from 'vue'
import { useThrottleFn } from '@vueuse/core'

export function useReadingProgress() {
  const progress = ref(0)

  function updateProgress() {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    if (docHeight <= 0) {
      progress.value = 0
      return
    }
    progress.value = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100))
  }

  const handleScroll = useThrottleFn(updateProgress, 50)

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    updateProgress()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { progress }
}
