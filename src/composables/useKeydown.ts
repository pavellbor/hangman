import { onMounted } from "vue"

type Callback = (key: string) => void

const useKeydown = (callback: Callback) => {
  const validateKey = (key: string) => /[а-яА-ЯёЁ]/.test(key)

  onMounted(() => {
    window.addEventListener('keydown', ({ key }: KeyboardEvent) => {
      if (validateKey(key)) {
        const keyInLowerCase = key.toLowerCase()
        callback(keyInLowerCase)
      }
    })
  })
}

export default useKeydown