/*
  Here is where the POST request connecting to the phishtank API lives, as well as the submission of
  a new URL to the database. Because this entire app is essentially 'client-side', the actual
  express code lives as a cloud function in firebase. If you're looking for it in github,
  you can find it in /functions/index.js

*/
import moment from 'moment'
import request from 'request'
import axios from 'axios'
import phish from '../phish'

export const submitUrlForm = (urlData) => async (dispatch) => {
  const { longUrl, alias } = urlData

  return request.post({
    url: 'https://us-central1-url-muse.cloudfunctions.net/api/check-url',
    json: true,
    form: {
      url: longUrl,
      app_key: phish
    }},
    function (error, response, body) {
      const data = {
        longUrl: longUrl,
        alias,
        createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
        suspect: body.results.in_database
      }

      request.post({
        url:'http://localhost:8080/api/urls',
        json: true,
        body: data
      })

      return dispatch({
        type: 'ADD_URL',
        url: data
      })
    })
}

export const fetchUrl = (alias) => async (dispatch) => {
  dispatch({type: 'FETCH_URL'})
  await axios.get('http://localhost:8080/api', {
    params: {
      alias: alias
    }
  }).then((res) => {
    const data = {
      longUrl: res.data.longUrl,
      alias: res.data.alias,
      createdAt: res.data.createdAt,
      suspect: res.data.suspect
    }
    return dispatch({
      type: 'RECEIVE_URL',
      fetchUrl: data
    })
  })

}
