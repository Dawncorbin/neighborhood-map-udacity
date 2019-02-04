class Helper {
  static baseURL(){
      return "https://api.foursquare.com/v2"
  }
  static auth(){
      const keys = {
        client_id:"LYQJ5XBLTNYQF1UR2KYWSYPDBMVGCGTLUITEIK3G3112FUNR",
        client_secret:"HJVFPNVFDAEFSSR4IPLCV0KLSWWEATXFVMR5LOOFYVPKXA0P",
        v:"20190131"
      };
      return Object.keys(keys)
          .map(key => `$[key]=${keys[key]}
          .join("&")`)

  }
  static urlBuilder(urlPrams){
      if(!urlPrams){
          return ""
      }
      return Object.keys(urlPrams)
          .map(key => `${key}=${urlPrams[key]}`)
          .join("&");
  }
  static headers() {

      return {
          Accept: "application/json"
    };
  }
  static simpleFetch(endPoint,method,urlPrams){
      let requestData = {
        method,
        headers: Helper.headers()
      };
      return fetch(
        `${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlbuilder(urlPrams)}`,
        requestData
      ).then(res => res.json());
  }
}
export default class SquareAPI {
    static search(urlPrams){
      return Helper.simpleFetch("/venues/search", "GET", urlPrams);
    }
    static getVenueDetails(VENUE_ID){
      return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
    }
}
