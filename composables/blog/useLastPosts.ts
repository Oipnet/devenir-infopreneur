import type {Post} from "~/types/Post";

export const useLastPosts = async () => {
    return await queryContent<Post>('blog')
        .sort({ date: -1 })
        .limit(3)
        .find()
}