import Selector from './Selector.js'
import rp from 'request-promise'

class Page {
  
  constructor (urlPage = '', namePage = ''){
    this._urlPage = urlPage
    this._namePage = namePage
    this._htmlPage = ''
    this._selectorsPage = []
  }

  set urlPage(urlPage)  { this._urlPage = urlPage }
  get urlPage()         { return this._urlPage }
  set namePage(namePage){ this._namePage = namePage}
  get namePage()        { return this._namePage}
  get htmlPage()        { return this._htmlPage}
  get selectorsPage ()  { return this._selectorsPage }

  async loadPage(){
    const htmlPage = await rp(this._urlPage)
    this._htmlPage = htmlPage
    return htmlPage
  }

  addSelector(selector) {
    if (selector instanceof Selector)
      this._selectorsPage.push(selector)
  }

  async getSelections() {
    const select = this._selectorsPage.map( async e => {
      const data = {
        namePage: e.nameSelector,
        data: await e.selection(this._htmlPage)
      }
      return data
    })
    return Promise.all(select)
  }


}

export default Page
