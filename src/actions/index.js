import axios from 'axios'

export const GET_LIST = "GET_LIST"

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
  return axios(`/list`)
    .then(response => {
      dispatch(response)
    })
}

export const axiosList = list => (dispatch, getState) => {
  return dispatch(fetchPosts(list))
}