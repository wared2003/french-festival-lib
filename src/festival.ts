import { FestivalModel } from "./models/festival.model";
import { ApiResInterface } from "./interfaces/apiRes.interface";

export default class Festival {

  /** url of the api */
  private readonly baseUrl: string = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals';

  /**
   * Get festivals list
   *
   * @param {number} limit  number of festivals to query
   * return {Promise<any>}  Promise object represents the festivals list
   */
  getFestivals(limit = -1): Promise<FestivalModel[]> {
    if (!(-1 <= limit) || !(limit < 1000))
      return Promise.reject('limit must be between -1 and 1000');
    return fetch(`${this.baseUrl}&rows=${limit}`)
      .then((response) => response.json())
      .then((response: ApiResInterface<FestivalModel>) => response.records.map((record) => record.fields))
      .catch((error) => Promise.reject(error));
  }
}
