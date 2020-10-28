import axios from 'axios';

const api = 'https://5f518d325e98480016123ada.mockapi.io/api/v1/images/';

export const getImg = async () => {
    try {
        const res = await axios.get(api);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - getImg: ${err}`);
    }
}

export const postImg = async (title, url) => {
    try {
        const newImg = {title, url};
        const res = await axios.post(api, newImg);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - postImg: ${err}`);
    }   
}


