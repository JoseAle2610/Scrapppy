import Selector from './Selector.js'
import rp from 'request-promise'

class Url {
  
  constructor (url = '', name = ''){
    this._url = url
    this._name = name
    this._html = ''
    this._selectors  = []
  }

  set url(url)      { this._url = url }
  get url()         { return this._url }
  set name(name)    { this._name = name}
  get name()        { return this._name}
  get html()        { return this._html}
  get selectors ()  { return this._selectors }

  async loadPage(){
    const html = await rp(this.url)
    this._html = html
    return html
  }

  addSelector(selector) {
    if (selector instanceof Selector) {
      this._selectors.push(selector)
    }
  }

  async getSelections() {
    const select = this._selectors.map( async e => {
      const data = {
        name: e.name,
        data: await e.selection(this._html)
      }
      return data
    })
    return Promise.all(select)
  }


}

export default Url
