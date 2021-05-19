const fsService = require('./fs-service');

test('should list all', async () => {
    let listOfMarkdownFiles = await fsService.findFiles('**/test-data/**/*.*');
    expect(listOfMarkdownFiles.length).toBe(13);
});

test('should list all text amd markdown files', async () => {
    let listOfMarkdownFiles = await fsService.findFiles('**/test-data/**/*.+(txt|md)');
    expect(listOfMarkdownFiles.length).toBe(10);
});

test('should list all md files', async () => {
    let listOfMarkdownFiles = await fsService.findFiles('**/test-data/**/*.md');
    expect(listOfMarkdownFiles.length).toBe(7);
});
