import {test} from "@playwright/test"


test('file upload', async({page})=>{

await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
await page.locator('#filesToUpload').setInputFiles(['filestoUpload\\FileName.doc','filestoUpload/FielName.xlsx','filestoUpload\\FileName.txt'])

})


test('file upload1', async({page})=>{

await page.goto('http://the-internet.herokuapp.com/upload')
//await page.locator('#file-upload').setInputFiles(['filestoUpload\\FileName.doc'])

const FiletobeUpload = page.waitForEvent('filechooser')
await page.locator('#drag-drop-upload').click();

const FilesUploadPart = await FiletobeUpload;
await FilesUploadPart.setFiles(['filestoUpload\\FileName.doc','filestoUpload/FielName.xlsx','filestoUpload\\FileName.txt'])


})