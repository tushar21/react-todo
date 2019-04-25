import {get}  from '../services/http';
import Configs from '../configs'
export function getPlaces(query:string){
    let params = {
        'input': query,
        'key': Configs.GOOGLE_PLACES_API_KEY
    }

    return get('maps/api/place/autocomplete/json', params, 'https://maps.googleapis.com/')
}


// https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Nisrag akash&key=AIzaSyAFHECbVg0OE8492UruoBtxTfnHjQQJ2RY