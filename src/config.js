// const DEBUG = true;
export default {
    api_endpoint_dev: process.env.NODE_ENV === 'production' ? "http://africantalks.herokuapp.com/api/" : "http://localhost:8000/api/",
    images: process.env.NODE_ENV === 'production' ? "" : "http://localhost:8000",
}