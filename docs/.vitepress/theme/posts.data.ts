import {createContentLoader} from 'vitepress'

export default createContentLoader("posts/*.md",{
  transform(rawData){
    const blogData = rawData.map((data) => data)
    return blogData
  }
})
