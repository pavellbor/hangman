import { onMounted, ref } from "vue"
import getRandomName from "@/api/getRandomName"

type Word = string | null
type Error = string | null

const useWord = () => {
  const word = ref<Word>(null)
  const error = ref<Error>(null)

  const getRandomWord = async () => {
    try {
      const rawWord = await getRandomName()
      word.value = rawWord.toLowerCase()
    } catch (err) {
      console.log(err)
      error.value = 'Не удалось загрузить слово'
    }
  }

  onMounted(getRandomWord)

  return {
    word,
    error,
    getRandomWord,
  }
}

export default useWord