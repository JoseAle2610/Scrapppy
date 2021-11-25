import Selector from './Selector.js'
import rp from 'request-promise'

class Page {
  
  constructor (urlPage = '', namePage = ''){
    this.urlPage = urlPage
    this.namePage = namePage
    this.htmlPage = ''
    this.selectorsPage = []
  }

  async loadPage(){
    try {
      const htmlPage = await rp(this.urlPage)
      this.htmlPage = htmlPage
      return htmlPage
    } catch (err) {
      console.log('Page not found')
      return false
    }
  }

  addSelector(selector) {
    if (selector instanceof Selector)
      this.selectorsPage.push(selector)
  }

  async getSelections() {
    const select = this.selectorsPage.map( async e => {
      const data = {
        namePage: e.nameSelector,
        data: await e.selection(this.htmlPage)
      }
      return data
    })
    return Promise.all(select)
  }


}

export default Page
