import { useRepositoryIoc } from '../../services/config/context';
import { TYPES } from '../../services/config/types';
import { ProductsRepository } from '../../services/repositories/products.repository';

/**
   * Custom Hook that return ProductsRepository
   */
const useProductsRepository = () : ProductsRepository => {
  const { container } = useRepositoryIoc();
  return container.get(TYPES.PRODUCTS_REPOSITORY);
};

export default useProductsRepository;
