import requests from "./httpServices";


const QueryServices = {


  submitProductQueryForm: async (formData) => {
    return requests.post("/query/submitProductQuery", formData);
  },
};

export default QueryServices;
