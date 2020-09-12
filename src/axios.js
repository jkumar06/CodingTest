import axios from 'axios';

const instance = axios.create({
    URL = "https://api.spaceXdata.com/v3/launches?limit=100&amp;launch_success=true"
});

export default instance;