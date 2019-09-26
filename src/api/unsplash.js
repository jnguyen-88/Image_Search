import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 
            'Client-ID 29b213fbeb1240e7b0f2747e7ba56750057ed81dbd8378e99a163807e2dadbec'
    }
});