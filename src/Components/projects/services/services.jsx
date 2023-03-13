import { Data } from "../Data"

const service = {
    getData: ({from, to} ) => {
      return new Promise ((resolve) => {

        const data = Data.slice(from, to); 
        resolve({
            count: Data.length,
            data: data
        })
      });
    }
}

export default service;