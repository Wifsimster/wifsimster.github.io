import { ref } from 'vue'

const searchQuery = ref('')

export function useSearch() {
  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  const clearSearch = () => {
    searchQuery.value = ''
  }

  return {
    searchQuery,
    setSearchQuery,
    clearSearch
  }
}
