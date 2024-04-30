// const apiRequest = async (url = "", objOptions = null, errMsg = null) => {
//     try {
//         const resp = await fetch(url, objOptions);
//         if(!resp.ok) throw Error('Please reload the page')
//     } catch (err) {
//         errMsg = 'Please reload the page'
//     } finally {
//         return errMsg
//     }
// }

// export default apiRequest

import axios from "axios";

export default axios.create({
    baseURL : "http://localhost:3500"
})