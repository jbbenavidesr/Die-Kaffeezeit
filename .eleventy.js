module.exports = config => {

    // Returns work items, sorted by display order
    config.addCollection('posts', collection => {
        return collection
            .getFilteredByGlob('./src/posts/*.md');
    });

    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/')
    config.addPassthroughCopy('./src/admin/')

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};
