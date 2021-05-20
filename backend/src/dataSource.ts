import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'
import camelCaseKeys from 'camelcase-keys'

const ACCESS_KEY = '4d18c480fbbaa5da7e9b49b2b37f8262'
const API_URL = 'https://api.openweathermap.org/data/2.5/'

export class WeatherAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = API_URL
  }

  willSendRequest(request: RequestOptions) {
    request.params.set('appid', ACCESS_KEY)
  }

  async withCoords(lat: number, lon: number) {
    const data = await this.get('weather', { lat, lon })
    return camelCaseKeys(data, { deep: true })
  }

  async withCity(city: string) {
    const data = await this.get('weather', { q: city })
    return camelCaseKeys(data, { deep: true })
  }
}

export const dataSources = () => ({ weatherAPI: new WeatherAPI() })
