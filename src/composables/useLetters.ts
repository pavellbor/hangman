import { ref, computed, type Ref } from "vue"

type Word = Ref<string | null>
type Letters = string[]

const useLetters = (word: Word) => {
  const letters = ref<Letters>([])

  const correctLetters = computed<Letters>(() => {
    return letters.value.filter((x) => word.value?.includes(x))
  })
  const wrongLetters = computed<Letters>(() => {
    return letters.value.filter((x) => !word.value?.includes(x))
  })

  return {
    letters,
    correctLetters,
    wrongLetters
  }
}

export default useLetters