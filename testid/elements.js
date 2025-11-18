import { Selector } from 'testcafe';

fixture`Elementide test`
    .page`https://the-internet.herokuapp.com/add_remove_elements/`;

test('Elementide lisamine ja kustutamine', async t => {
    const addButton = Selector('button').withText('Add Element');
    const deleteButton = Selector('.added-manually');

    // 1 - nupu olemasolu kontrollimine
    await t.expect(addButton.exists).ok();

    // 2 - elemendi lisamine
    await t.click(addButton);

    // 3 - kontrollitakse kas kustuta nupp on olemas
    await t.expect(deleteButton.count).eql(1);

    // 4 - lisatakse 2 elementi juurde
    await t
        .click(addButton)
        .click(addButton);

    // 5 - kontrollitakse kas kokku on kolm kustuta nuppu
    await t.expect(deleteButton.count).eql(3);

    // 6 - kustutatakse üks element
    await t.click(deleteButton.nth(0));

    // 7 - kontrollitakse kas kokku on kaks kustuta nuppu
    await t.expect(deleteButton.count).eql(2);
});
