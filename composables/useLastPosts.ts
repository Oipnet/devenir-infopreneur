export const useLastPosts = async () => {
    return await queryContent('blog')
        .sort({ date: -1 })
        .limit(3)
        .find()
}