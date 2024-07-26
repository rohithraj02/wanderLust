const fetchData = (filePath) => {
    try {
        const response = fetch(filePath); 
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.then(res => res.json()); // Parsing JSON response
    } catch (error) {
        console.error(`Error fetching data from ${filePath}:`, error);
        return [];
    }
};

export default fetchData;
