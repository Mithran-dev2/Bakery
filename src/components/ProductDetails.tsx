import { useParams } from 'react-router-dom';
import { getProductById } from '../Data/Product';
import { Product } from '../Types';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      {/* Product detail implementation */}
    </div>
  );
};

export default ProductDetailPage;