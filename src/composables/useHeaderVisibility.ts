import { ref } from 'vue'

// Shared across Header (writer) and any component that must react to the
// mobile header sliding away (e.g. the reading progress bar).
const headerHidden = ref(false)

export function useHeaderVisibility() {
  return { headerHidden }
}
