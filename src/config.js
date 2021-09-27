const DEBUG = true;
export default {
    api_endpoint_dev: !DEBUG || process.env.NODE_ENV === 'production' ? "https://africantalks.herokuapp.com/api/" : "http://localhost:8000/api/",
    images: !DEBUG || process.env.NODE_ENV === 'production' ? "" : "http://localhost:8000",
    specials_images: !DEBUG || process.env.NODE_ENV === 'production' ? "https://d3nzp0pknb17lj.cloudfront.net" : "http://localhost:8000"
}