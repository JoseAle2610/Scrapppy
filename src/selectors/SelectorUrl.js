import cheerio from 'cheerio'
import Selector from '../entities/Selector.js'
import Page from '../entities/Page.js'

class SelectorUrl extends Selector {
  constructor (cssClass = '', nameSelector = '') {
    super(cssClass, nameSelector)
    this.subUrls = []
    this.selectorsPage = []
  }

  async selection (html){
    // get subUrls
    const subUrls = this.getsubUrls(html)
    return await this.loadPages(subUrls)
  }

  async loadPages (subUrls) {
    const pages = subUrls.map(async url => {
      const page = new Page(url, 'subUrl')
      const html = await page.loadPage()
      this.selectorsPage.map(selector => {
        page.addSelector(selector)
      })
      console.log('page loaded')
      return page.getSelections()
    })
    return Promise.all(pages)
  }

  getsubUrls (html){
    const $ = cheerio.load(html)
    const elemets = [... $(this.cssClass)]
    this.subUrls = elemets.map( e => $(e).attr('href') )
    return this.subUrls
  }

  addSelector (selector) {
    if (selector instanceof Selector)
      this.selectorsPage.push(selector)
  }
}

export default SelectorUrl