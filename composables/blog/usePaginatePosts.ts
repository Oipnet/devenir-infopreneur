import type {Post} from "~/types/Post";

export const usePaginatePosts = async (page: number, postPerPage: number, skip: number = 0) => {
    return await queryContent<Post>('blog')
        .sort({ date: -1 })
        .limit(page * postPerPage)
        .skip(skip)
        .find()
}