import cheerio from 'cheerio'
import Selector from '../entities/Selector.js'
import Url from '../entities/Url.js'

class SelectorUrl extends Selector {
  constructor (cssSelector = '', name = '', page='') {
    super(cssSelector, name)
    this._urls = []
    this._pages = []
    this._pageClass = page
    this._selectors = []
  }

  async selection (html){
    // get urls
    const urls = this.getUrls(html)
    return await this.loadPages(urls)
  }

  async loadPages (urls) {
    const pages = urls.map(async url => {
      const page = new Url(url, 'subUrl')
      const html = await page.loadPage()
      this._selectors.map(selector => {
        page.addSelector(selector)
      })
      console.log('page loaded')
      return page.getSelections()
    })
    return Promise.all(pages)
  }

  getUrls (html){
    const $ = cheerio.load(html)
    const elemets = [... $(this._cssSelector)]
    this._urls = elemets.map( e => $(e).attr('href') )
    return this._urls
  }

  addSelector (selector) {
    if (selector instanceof Selector)
      this._selectors.push(selector)
  }
}

export default SelectorUrl