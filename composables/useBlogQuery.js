export const useBlogQuery = async () => await queryContent({
    path: 'thoughts-and-things',
    sort: [{ date: -1, $numeric: true }],
    where: [{ layout: 'blog' }],
});