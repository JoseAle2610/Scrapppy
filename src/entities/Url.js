import Selector from './Selector.js'
import rp from 'request-promise'

class Url {
  
  constructor (url = '', name = '', id = ''){
    this._url = url
    this._name = name
    this._id = id
    this._html = ''
    this._selectors  = []
  }

  set url(url)      { this._url = url }
  get url()         { return this._url }
  set name(name)    { this._name = name}
  get name()        { return this._name}
  set id(id)        { this._id = id}
  get id()          { return this._id}
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

  getSelections() {
    return this._selectors.map( e => e.selection(this._html)
  }


}

export default Url