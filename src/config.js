const DEBUG = false;
export default {
    api_endpoint_dev: !DEBUG || process.env.NODE_ENV === 'production' ? "http://africantalks.herokuapp.com/api/" : "http://localhost:8000/api/",
    images: !DEBUG || process.env.NODE_ENV === 'production' ? "" : "http://localhost:8000",
}