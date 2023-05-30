import { ref } from "vue"
import GameNotification from '../components/GameNotification.vue'

const useNotification = () => {
  const notification = ref<InstanceType<typeof GameNotification> | null>(null)

  const showNotification = () => {
    notification.value?.open()
    setTimeout(() => {
      notification.value?.close()
    }, 2000)
  }

  return {
    notification,
    showNotification
  }
}

export default useNotification