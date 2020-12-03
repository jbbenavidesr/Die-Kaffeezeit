module.exports = config => {

    // Returns post items
    config.addCollection('posts', collection => {
        return collection
            .getFilteredByGlob('./src/posts/*.md');
    });

    // Returns rezepte items
    config.addCollection('rezepte', collection => {
        return collection
            .getFilteredByGlob('./src/rezepte/*.md');
    });

    config.addCollection('anzeige', collection => {
        return collection
            .getFilteredByGlob('./src/anzeige/*.md');
    });

    config.addCollection('people', collection => {
        return collection
            .getFilteredByGlob('./src/people/*.md');
    });

    config.addCollection("categories", collection => {
        let categorySet = new Set();
        collection.getAll().forEach( item => {
            if ( "tags" in item.data ) {
                let tags = item.data.tags;

                tags = tags.filter( item =>{
                    switch (item ) {
                        case "all":
                        case "nav":
                        case "anzeige":
                        case "posts":
                        case "rezepte":
                        case "people":
                            return false;
                    }
                    return true;
                });

                for (const tag of tags) {
                    categorySet.add(tag);
                }
            }
        });

        return [...categorySet]
    })

    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/admin/')

    // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
    config.setUseGitIgnore(false);

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
