export const useBlogQueryObject = (count, skip) => ({
    where: {
        _path: { $contains: '/thoughts-and-things' }
    },
    limit: count ?? Infinity,
    skip: skip ?? 0,
    sort: [{ date: -1 }]
});