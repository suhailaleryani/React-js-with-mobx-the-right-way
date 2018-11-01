

class CarsService {

  api = "https://randomapi.com/api/umiqtf2n?key=FGW4-XWFD-W0M9-E01O&results=25"; // this can be changed , or put in .env file or attached to window object
  payloadName = "results";

  async getCars() {
    return fetch(this.api)
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        console.log(body);
        return body[this.payloadName];
      });
  }


}

export default CarsService;