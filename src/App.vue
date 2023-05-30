<script setup lang="ts">
import GameHeader from './components/GameHeader.vue'
import GameFigure from './components/GameFigure.vue'
import GameWrongLetters from './components/GameWrongLetters.vue'
import GameWord from './components/GameWord.vue'
import GamePopup from './components/GamePopup.vue'
import GameNotification from './components/GameNotification.vue'

import { computed } from 'vue'
import useWord from './composables/useWord'
import useKeydown from './composables/useKeydown'
import useLetters from './composables/useLetters'

import GameStatus from './types/GameStatus'
import useNotification from './composables/useNotification'

const { word, getRandomWord } = useWord()
const { letters, correctLetters, wrongLetters } = useLetters(word)
const { notification, showNotification } = useNotification()

const gameStatus = computed<GameStatus>(() => {
  if (word.value?.split('').every((x) => correctLetters.value.includes(x))) {
    return GameStatus.Win
  }

  if (wrongLetters.value.length === 6) {
    return GameStatus.Lose
  }

  return GameStatus.Playing
})

const restart = async () => {
  getRandomWord()
  letters.value = []
}

useKeydown((letter: string) => {
  if (gameStatus.value !== GameStatus.Playing) {
    return
  }

  if (letters.value.includes(letter)) {
    showNotification()
    return
  }

  letters.value.push(letter)
})
</script>

<template>
  <GameHeader />
  <div v-if="word" class="game-container">
    <GameFigure :wrong-letters-count="wrongLetters.length" />
    <GameWrongLetters :wrong-letters="wrongLetters" />
    <GameWord :word="word" :correct-letters="correctLetters" />
  </div>
  <GamePopup
    v-show="gameStatus !== GameStatus.Playing"
    :status="gameStatus"
    :word="word"
    @restart="restart"
  />
  <GameNotification ref="notification" />
</template>
