export const buildRolesSearchQueryParams = (
    searchString: string = '',
    page: number = 1, 
    pageSize: number = 15, 
) => {
    const params = new URLSearchParams({
        page: page.toString(),
        pageSize: pageSize.toString(),
        searchString
    });

    return params.toString();
};

export const buildQueryParams = (
    search:Record<string, string>
) => {
    const params = new URLSearchParams({
        ...search
    });

    return params.toString();
};