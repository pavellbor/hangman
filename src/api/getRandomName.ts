import axios from "axios"

const getRandomName = async () => {
  const response = await axios<{ FirstName: string }>(
    'https://api.randomdatatools.ru/?unescaped=false&params=FirstName'
  )

  return response.data.FirstName
}

export default getRandomName

