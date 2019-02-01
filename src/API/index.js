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
  static headers() {

    return {
        Accept: "application/json"
    };
  }
}
