import axios from 'axios'

export const GET_LIST = "GET_LIST"


// export const getList = list => ({
//   type: GET_LIST,
//   list
// })

const changeList = (list) => ({
  type: GET_LIST,
  data: list
})

export const getList = () => {
  return dispatch => {
    axios.get('/list').then(res => {
      const result = res.data
      dispatch(changeList(result))
    })
  }
}




const fetchPosts = subreddit => dispatch => {
  // dispatch(requestPosts(subreddit))
  return axios(`/list`)
    .then(response => {
      dispatch(response)
    })
  //   .then(json => dispatch(receivePosts(subreddit, json)))
}

export const axiosList = list => (dispatch, getState) => {

  return dispatch(fetchPosts(list))

}