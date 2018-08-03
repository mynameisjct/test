import React from 'react';

export default _fetchBasic = (endPoint,data = {}, _method = 'get', _headers = {}) => {

    if(data === {} || _headers === {}){
        console.log('this');
        fetch(endPoint)
            .then((res) => res.json())
            .then((res) => {console.log(res + ' ++++++++++++++++++++++ ')}).catch((err) => {console.log(err)})
    }else{
        console.log('that');
        fetch(endPoint,{
            method: _method,
            headers: _headers,
            body: data
            })
            .then((res) => res.json())
            .then((res) => {console.log(res + ' ++++++++++++++++++++++ ')}).catch((err) => {console.log(err)})
    }
}