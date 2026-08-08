import React from 'react'
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import Loader from '../../components/common/Loader/Loader';
import ProductGallery from '../../components/product/ProductGallery/ProductGallery';
import ProductInfo from '../../components/product/ProductInfo/ProductInfo';
import Container from '../../components/common/Container';

const ProductDetails = () => {
  const { id } = useParams();
  const {
    product,
    loading,
    error,
  } = useProductDetails(id);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-20">
        {error}
      </div>
    );
  }

  if (!product) return null;

  return (
    <Container>
      <div className="w-full flex items-start flex-col gap-8 md:flex-row">
        <div className='w-full shrink-0 flex flex-col gap-2 md:max-w-80 lg:max-w-96'>
          <h1 className="text-2xl font-bold">
            {product.title}
          </h1>

          <div className="w-full overflow-hidden relative">
            <ProductGallery
              images={product.images}
              title={product.title}
              className="w-full h-full object-cover absolute inset-0 group-hover:scale-110"
              skeletonClassName="w-full h-full"
            />
          </div>
        </div>

        <div className='w-full'>
          <ProductInfo product={product} />
        </div>
      </div>
    </Container>
  )
}

export default ProductDetails