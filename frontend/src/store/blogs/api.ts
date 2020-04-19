import axios from 'axios'
import { BlogsState } from 'store/blogs/types'
import { convertToRaw } from 'draft-js'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || ''

export const saveRequest = async (blogs: BlogsState) => {
  try {
    const content = convertToRaw(blogs.editorState.getCurrentContent())
    const res = await axios.post(`${API_ENDPOINT}/blogs`, {
      title: blogs.title,
      ogImage: blogs.ogImage,
      description: blogs.description,
      content: JSON.stringify(content)
    })
    return { data: res.data, isSuccess: true }
  } catch (error) {
    return { data: null, isSuccess: false }
  }
}

export const updateRequest = async (blogs: BlogsState) => {
  try {
    const content = convertToRaw(blogs.editorState.getCurrentContent())
    const res = await axios.put(`${API_ENDPOINT}/blogs/${blogs.id}`, {
      id: blogs.id,
      title: blogs.title,
      image: blogs.image,
      description: blogs.description,
      content: JSON.stringify(content)
    })
    return { data: res.data, isSuccess: true }
  } catch (error) {
    return { data: null, isSuccess: false }
  }
}

export const fetchRequest = async () => {
  try {
    const id = window.location.pathname.split('/').pop()
    const res = await axios.get(`${API_ENDPOINT}/blogs/${id}`)
    return { data: res.data, isSuccess: true }
  } catch (error) {
    return { data: null, isSuccess: false }
  }
}

export const fetchAllRequest = async () => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/blogs`)
    console.log(res)
    return { data: res.data, isSuccess: true }
  } catch (error) {
    return { data: null, isSuccess: false }
  }
}
