import { Selector } from 'testcafe';

fixture`Ruutude test`
    .page`https://the-internet.herokuapp.com/checkboxes`;

test('Märkeruutude valimine ja tühistamine', async t => {
    const checkbox1 = Selector('#checkboxes input').nth(0);
    const checkbox2 = Selector('#checkboxes input').nth(1);

    // 1 - kontrollib kas elemendid on olemas
    await t
        .expect(checkbox1.exists).ok()
        .expect(checkbox2.exists).ok();

    // 2 - kontrollib ruutude olekut
    await t.expect(checkbox1.checked).notOk();

    // 3 - märib esimese ruudu
    await t.click(checkbox1);
    await t.expect(checkbox1.checked).ok();

    // 4 - kontrollib teise ruudu olekut (peab olema märgitud)
    await t.expect(checkbox2.checked).ok();

    // 5 - eemaldab märke
    await t.click(checkbox2);
    await t.expect(checkbox2.checked).notOk();

    // 6 - märgib mõlemad
    if (!await checkbox1.checked) await t.click(checkbox1);
    if (!await checkbox2.checked) await t.click(checkbox2);

    await t
        .expect(checkbox1.checked).ok()
        .expect(checkbox2.checked).ok();
});
