module.exports = config => {

    // Returns post items
    config.addCollection('posts', collection => {
        return collection
            .getFilteredByGlob('./src/posts/*.md');
    });

    // Returns recipes items
    config.addCollection('recipes', collection => {
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
                        case "recipes":
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
