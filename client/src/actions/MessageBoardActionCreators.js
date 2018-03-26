import ActionTypes from '../constants/ActionTypes';


/**
 * receive a message list
 * @param {Object} data
 */
export function receiveMessageList(data) {
    const url = 'http://localhost:8080/api/table';
    let bodyData = { name: 'Sara' }
    let header = new Headers({
        "Content-Type":"application/json",
        'Access-Control-Allow-Origin':'*'
    });
    let fetchData = {
        method: 'GET',
        mode: 'cors',
        body: bodyData,
        headers: header
    }

    return dispatch => {
        dispatch({
          type: ActionTypes.REQUEST_MESSAGE_LIST,
        });

        const responseHandler = response => dispatch({
          type: ActionTypes.RECEIVE_MESSAGE_LIST,
          payload: response.data,
        });
        return fetch(url, fetchData).then(response =>response.json()).then(responseHandler);
      }

}
