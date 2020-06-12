import validLogin from '../role/loginRole';
import homePage from '../page/homePage';
import gistPage from '../page/gistPage';
import {getUsername,getPassword} from '../helper/helper';
import basePage from '../page/basePage';

fixture `Shopee Test`
    .page `${basePage.baseUrl}`

const gistDesc = "Test desc shopee"
const gistName = "Test Filename"
const gistField = "Test Field"

const gistEditDesc = "Test Edited Description"

//1. As a user, I want to create a public gist
test('Valid user able to create a public gist', async t=>{
    await t
    .useRole(validLogin(getUsername(),getPassword()))
    .click(homePage.btnMenu)
    .click(homePage.btnAdd)
    .typeText(gistPage.txtDesc,gistDesc)
    .typeText(gistPage.txtFilename,gistName)
    //TODO : Still error
    .typeText(gistPage.txtField,gistField)
    .click(gistPage.btnCreatePrivate)

    .expect(gistPage.txtNameAssert.innerText).eql(gistName)
})   

//4.As a user, I want to see my list of gists.
test('Valid user able to view list of gist', async t=>{
    await t
    .useRole(validLogin(getUsername(),getPassword()))
    .click(homePage.btnMenu)
    .click(homePage.btnAdd)
    .click(gistPage.btnViewAllGist)

    .expect(gistPage.listGist.withExactText(gistName).count).gt(0)
})

// 2.As a user, I want to edit an existing gist.
test('Valid user able to edit an existing gist', async t=>{
    await t
    .useRole(validLogin(getUsername(),getPassword()))
    .click(homePage.btnMenu)
    .click(homePage.btnAdd)
    .click(gistPage.btnViewAllGist)
    .click(gistPage.listGist.withExactText(gistName))
    .click(gistPage.btnEdit)
    .typeText(gistPage.txtDesc,gistEditDesc, { replace: true })
    .click(gistPage.btnUpdate)

    .expect(gistPage.txtDescAssert.innerText).eql(gistEditDesc)
})

// 3.As a user, I want to delete an existing gist
test('Valid user able to delete GIST', async t=>{
    await t
    .useRole(validLogin(getUsername(),getPassword()))
    .click(homePage.btnMenu)
    .click(homePage.btnAdd)
    .click(gistPage.btnViewAllGist)
    .click(gistPage.listGist.withExactText(gistDesc))
    .setNativeDialogHandler(() => true)
    .click(gistPage.btnDelete)
})
