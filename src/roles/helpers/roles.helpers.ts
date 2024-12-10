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