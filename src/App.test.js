const puppeteer = require('puppeteer')

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMod: 250,
    devtools: true,
  }
  return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
}

let browser
let page
beforeAll( async () => {
  browser = await puppeteer.launch(isDebugging())
  page = await browser.newPage()
  await page.goto('http://localhost:3000/')
  page.setViewport({ width: 500, height: 2400 })
} )

describe('on page load', () => {
  test('h1 loads correctly', async () => {
    const html = await page.$eval('.App-title', el => el.innerHTML)

    expect(html).toBe('Welcome to React')

  }, 16000)

  test('nav loads correctly', async () => {

    const navbar = await page.$eval('.navbar', el => el ? true : false)
    const listItems = await page.$$('.nav-li')

    expect(navbar).toBe(true)
    expect(listItems.length).toBe(4)
  })
})

afterAll(() => {
  if (isDebugging()) {
    browser.close()
  }
})
