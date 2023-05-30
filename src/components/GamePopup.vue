<script setup lang="ts">
import GameStatus from '@/types/GameStatus';

interface Props {
  status: GameStatus
  word: string | null
}

interface Emits {
  (e: 'restart'): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <div class="popup-container">
    <div class="popup">
      <h2 v-if="status === GameStatus.Win">Поздравляю, вы победили! 😃</h2>
      <template v-if="status === GameStatus.Lose">
        <h2>Вы проиграли. 😕</h2>
        <h3>...имя: {{ word }}</h3>
      </template>
      <button @click="$emit('restart')">Сыграть еще раз</button>
    </div>
  </div>
</template>
