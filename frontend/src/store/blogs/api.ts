import axios from 'axios'
import { BlogsState } from 'store/blogs/types'
import { convertToRaw } from 'draft-js'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || ''

export const saveRequest = async (blogs: BlogsState) => {
  try {
    const content = convertToRaw(blogs.editorState.getCurrentContent())
    const res = await axios.post(`${API_ENDPOINT}/api/blogs`, {
      id: blogs.id || '',
      title: blogs.title,
      og_image: blogs.ogImage,
      description: blogs.description,
      content: JSON.stringify(content),
      status: blogs.status
    })
    return { data: res.data, isSuccess: true }
  } catch (error) {
    return { data: null, isSuccess: false }
  }
}

export const fetchRequest = async (blogs: BlogsState) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/api/blogs/${blogs.id}`)
    return { data: res.data, isSuccess: true }
  } catch (error) {
    return { data: null, isSuccess: false }
  }
}

export const fetchAllRequest = async (blogs: BlogsState) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/api/blogs`, {
      params: {
        status: blogs.status || null
      }
    })
    return { data: res.data, isSuccess: true }
  } catch (error) {
    return { data: null, isSuccess: false }
  }
}
