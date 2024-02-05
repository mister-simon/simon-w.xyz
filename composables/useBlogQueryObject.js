export const useBlogQueryObject = () => ({
    where: {
        _path: { $contains: '/thoughts-and-things' }
    },
    limit: 5,
    sort: [{ date: -1 }]
});