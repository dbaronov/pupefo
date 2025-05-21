import { use, useState } from 'react';
import { fetchProducts } from '../utils/fetchProducts';
import { Product } from '../types/product';

const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    try {
        const data = use(fetchProducts());
        setProducts(data);
    } catch (error) {
        setError('Failed to fetch products');
    } finally {
        setLoading(false);
    }
    // useEffect(() => {
    //     const loadProducts = async () => {
    //         try {
    //             const data = await fetchProducts();
    //             setProducts(data);
    //         } catch (err) {
    //             setError('Failed to fetch products');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     loadProducts();
    // }, []);

    return { products, loading, error };
};

export default useProducts;
