import { useState } from 'react';

interface Product {
    title: string;
    // Add other product properties if needed
}

interface UseSearchResult {
    searchTerm: string;
    filteredProducts: Product[];
    handleSearch: (term: string) => void;
}

const useSearch = (initialProducts: Product[]): UseSearchResult => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        if (term) {
            const filtered = initialProducts.filter(product =>
                product.title.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(initialProducts);
        }
    };

    return {
        searchTerm,
        filteredProducts,
        handleSearch,
    };
};

export default useSearch;
