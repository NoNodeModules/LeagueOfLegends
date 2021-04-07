const playwright = require('playwright');

async function main() {
    const browser = await playwright.chromium.launch({
        headless: false
    });

    const page = await browser.newPage();

    const results = await page.goto('https://www.op.gg/summoner/userName=Begln%20again');

    const clickInGameButton = await page.click('dd.Item.tabHeader.inGame > a')
    const awaitSelector = await page.waitForSelector('#SummonerLayoutContent > div.tabItem.Content.SummonerLayoutContent.summonerLayout-spectator > div')
    const getInGameInfo = await page.$('#SummonerLayoutContent > div.tabItem.Content.SummonerLayoutContent.summonerLayout-spectator > div > p:nth-child(2)')
    const inGameDeactive = await page.$('#SummonerLayoutContent > div.tabItem.Content.SummonerLayoutContent.summonerLayout-spectator > div > h2')
    const test = await getInGameInfo.textContent()
    const test2 = await inGameDeactive.textContent()

    if (test == '현재 게임중이라면 다시 시도해주세요.'){
        console.log(test2)
    }
}

main();