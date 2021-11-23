import Page from './entities/Page.js'
import SelectorText from './selectors/SelectorText.js'
import SelectorUrl from './selectors/SelectorUrl.js'
import SelectorElement from './selectors/SelectorElement.js'
import readline from './stdin.js'

// const baseUrl = 'https://gptables.azurecurve.co.uk/products/microsoft-dynamics-gp-0/'

(async () =>  {

  // const baseUrl = 'https://pt.wikipedia.org/wipki/Lista_de_presidentes_da_Venezuela'
  // const className = 'table.wikitable tbody'
  const baseUrl = 'https://gptables.azurecurve.co.uk/products/microsoft-dynamics-gp-0/'
  const className = 'span a.azc_pi'
  const page = new Page( baseUrl, 'Main')
  await page.loadPage()

  // const selectorE = new SelectorElement(className, 'namePresident')
  // selectorE.addSelector(new SelectorText('tr td:nth-child(5) b a', 'colName'))
  // selectorE.addSelector(new SelectorUrl('tr td:nth-child(5) b a', 'colName'))
  // Page.addSelector(selectorE)
  const selectorurl = new SelectorUrl(className, 'modulesGp')
  selectorurl.addSelector(new SelectorText(className, 'tableGp'))
  page.addSelector(selectorurl)
  page.addSelector(new SelectorText('h1', 'title'))

  console.log(await page.getSelections())

})()
