import axios, { AxiosResponse } from 'axios'

export const getRequest = async (): Promise<any> => {
    try {
        const response = await axios.get('https://ranmoji.herokuapp.com/emojis/api/v.1.0/')
            .then((resp: AxiosResponse<any>) => {
                //console.log(resp.data.emoji);
                return resp.data.emoji;
            })

        return response;
    } catch (err: any) {
        console.log(err)
    };
}