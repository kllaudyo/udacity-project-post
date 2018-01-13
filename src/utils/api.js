const
    api_host = "http://localhost:3001",
    api_token = Math.random().toString(36).substr(-8),
    headers = {
        'Authorization': api_token
    };

export const
    getAllCategories = () =>
        fetch(`${api_host}/categories`, { headers })
            .then(response => response.json());