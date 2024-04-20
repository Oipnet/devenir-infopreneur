import slugify from "slugify";

function createTagList(articles: any[]) {
    const tagMap = {}; // Utilisez un objet pour stocker les articles par tag

    articles.forEach((article) => {
        article.tags.forEach((tag: string) => {
            if (!tagMap[tag]) {
                // Si le tag n'existe pas encore, initialisez-le avec un tableau vide
                tagMap[tag] = [];
            }
            // Ajoutez l'article à la liste des articles associés à ce tag
            tagMap[tag].push(article);
        });
    });

    // Maintenant, tagMap contient une liste d'articles pour chaque tag
    // Vous pouvez formater la sortie comme vous le souhaitez
    const tagList = [];
    for (const tag in tagMap) {
        tagList.push({
            label: tag,
            slug: slugify(tag, { lower: true }),
            articles: tagMap[tag] });
    }
    return tagList;
}

export const useTags = async () => {
    const articles = await queryContent('blog').find();

    return createTagList(articles)

    return tagList
}