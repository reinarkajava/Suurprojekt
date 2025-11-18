import { Selector } from 'testcafe';

fixture`Sisselogimine`
    .page`https://the-internet.herokuapp.com/login`;

test('Sisselogimine', async t => {


    // 1 - kontrollib väljade olemasolu
    const username = Selector('#username');
    const password = Selector('#password');
    const flashMessage = Selector('#flash');
    // 2 - kontrollib nupu olemasolu
     const loginButton = Selector('button[type="submit"]');

    await t
        .expect(username.exists).ok()
        .expect(password.exists).ok()
        .expect(loginButton.exists).ok();

    // 3 - kasutajanimi
    await t.typeText(username, 'tomsmith');

    // 4 - parool
    await t.typeText(password, 'SuperSecretPassword!');

    // 5 - sisselogimine
    await t.click(loginButton);

    //6  - õnnestumine
    await t
        .expect(flashMessage.innerText)
        .contains('You logged into a secure area!');
});
