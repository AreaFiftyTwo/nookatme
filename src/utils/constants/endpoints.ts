const baseUrl = {
  development: "http://localhost:8080/",
  production: "https://nookatme-server001.com/"
}

const endpoints = {
  development: {
    baseUrl: baseUrl.development,
    apiItems: baseUrl.development + "api/items/",
    auth: baseUrl.development + "auth/"
  },
  production: {
    baseUrl: baseUrl.production,
    apiItems: baseUrl.production + "api/items/",
    auth: baseUrl.production + "auth/"
  },
  images: "https://acnhcdn.com/latest/FtrIcon/"
}

export default endpoints;
