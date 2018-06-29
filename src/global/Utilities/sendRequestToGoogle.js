import { key } from 'src/keys'
import axios from 'axios'

sendRequestToGoogle = async (encodedImage) => {
    let promise 
    let response
    try {
        promise = await axios.post( `https://vision.googleapis.com/v1/images:annotate?key=${key}`, {
            "requests": [{
                "image": {
                    "content": encodedImage
                },
                "features":[{
                    "type":"TEXT_DETECTION",
                    "maxResults":1
                }],
                "imageContext": {
                    "languageHints": [
                        'en', 'es'
                    ]
                }
            }]
        })
    } 
    catch (e) { 
        console.log('Something went wrong with Google Cloud Vision', e) 
    }
    finally {
            // promise.data is what we receive from axios
        response = promise.data.responses[0].textAnnotations[0].description;
    }
    return response
}

export default sendRequestToGoogle