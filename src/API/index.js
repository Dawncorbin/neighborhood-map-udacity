
class Helper{
    static baseUrl(){
      return "https://api.foursquare.com/v2";
    }
    static auth(){
      const keys = {
        client_id: "LYQJ5XBLTNYQF1UR2KYWSYPDBMVGCGTLUITEIK3G3112FUNR",
        client_secret: "HJVFPNVFDAEFSSR4IPLCV0KLSWWEATXFVMR5LOOFYVPKXA0P",
        v:"20190131"
      };
      return Object.keys(keys).map(key => `${key}=${keys[key]}`).join('&');
    }
    static urlBuilder(URLprams){
      if(!URLprams){
          return '';
      }
      return Object.keys(URLprams).map(key => `${key}=${URLprams[key]}`).join('&');
    }
    static verifyStatus(response) {
      if (response.ok) {
        return response;

      }else{
        let error = new Error(response.statusText);
        error = response;
        throw error;
      }
    }
    static headers(){
      return{
        Accept: "application/json"
      };
    }
    static simpleFetch(endPoint, method, URLprams){
      let requestData = {
        method,
        headers: Helper.headers()
      };
      return fetch(`${Helper.baseUrl()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(URLprams)}`, requestData)
      .then(response => response.json())
      .catch(error => {
        alert('An error occurred while trying to run program');
      });

    }
  }
  export default class SquareAPI {
    static search (URLprams){
      return Helper.simpleFetch("/venues/search", "GET", URLprams);

    }
    static getDetails(VENUE_ID){
      return Helper.simpleFetch(`/venues/${VENUE_ID}/`, "GET");

    }
    static getPhotos(VENUE_ID){
      return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET")
    }
  }
