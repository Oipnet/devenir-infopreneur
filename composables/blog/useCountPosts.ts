import type {Post} from "~/types/Post";

export const useCountPosts = async () => {
    return await queryContent<Post>('blog').count()
}