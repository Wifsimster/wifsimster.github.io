<template>
  <button
    @click="toggle"
    class="language-toggle"
    :class="{ 'is-en': i18n.language.value === 'en' }"
    :aria-label="i18n.language.value === 'fr' ? 'Switch to English' : 'Passer en Français'"
    role="switch"
    :aria-checked="i18n.language.value === 'en'"
  >
    <span class="language-toggle__label" :class="{ active: i18n.language.value === 'fr' }">FR</span>
    <span class="language-toggle__track">
      <span class="language-toggle__thumb" />
    </span>
    <span class="language-toggle__label" :class="{ active: i18n.language.value === 'en' }">US</span>
  </button>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const i18n = useI18n()

function toggle() {
  i18n.switchLanguage(i18n.language.value === 'fr' ? 'en' : 'fr')
}
</script>

<style scoped>
.language-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0.25rem;
  border-radius: 9999px;
  user-select: none;
}

.language-toggle__label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  transition: color 0.2s ease;
}

.language-toggle__label:not(.active) {
  color: var(--color-gray-400, #9ca3af);
}

.language-toggle__label.active {
  color: var(--color-primary-600, #0284c7);
}

:where(.dark) .language-toggle__label:not(.active) {
  color: var(--color-zinc-500, #71717a);
}

:where(.dark) .language-toggle__label.active {
  color: var(--color-primary-400, #38bdf8);
}

.language-toggle__track {
  position: relative;
  width: 2.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  background-color: var(--color-gray-300, #d1d5db);
  transition: background-color 0.2s ease;
}

:where(.dark) .language-toggle__track {
  background-color: var(--color-zinc-600, #52525b);
}

.language-toggle__thumb {
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  transition: transform 0.2s ease;
}

.language-toggle.is-en .language-toggle__track {
  background-color: var(--color-primary-500, #0ea5e9);
}

:where(.dark) .language-toggle.is-en .language-toggle__track {
  background-color: var(--color-primary-600, #0284c7);
}

.language-toggle.is-en .language-toggle__thumb {
  transform: translateX(1rem);
}
</style>
