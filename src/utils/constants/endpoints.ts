const baseUrl = {
  development: "http://localhost:8080/",
  production: "https://nookatme-server001.com/"
}

const endpoints = {
  development: {
    baseUrl: baseUrl.development,
    apiItems: baseUrl.development + "api/items/"
  },
  production: {
    baseUrl: baseUrl.production,
    apiItems: baseUrl.production + "api/items/"
  }
}

export default endpoints;
