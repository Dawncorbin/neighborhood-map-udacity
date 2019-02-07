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
          return "";
      }
      return Object.keys(urlPrams)
          .map(key => `${key}=${urlPrams[key]}`)
          .join("&");
  }
  static verifyStatus(response) {
    if (response.ok) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error = response;
      throw error;
    }
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
        `${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(urlPrams)}`,
        requestData)
        .then(Helper.verifyStatus)
        .then(res => res.json())
        .catch(error => {
          alert('An error occurred while trying to fetch data - Error Code of: ' + error.response);
        });
  }
}
export default class SquareAPI {
    static search(urlPrams){
      return Helper.simpleFetch("/venues/search", "GET", urlPrams);
    }
    static getVenueDetails(VENUE_ID){
      return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
    }
    static getVenuePhotos(VENUE_ID) {
      return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");
    }
}
