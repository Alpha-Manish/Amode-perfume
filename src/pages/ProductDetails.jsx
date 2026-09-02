import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // In a real app, this would be an API call
    const foundProduct = products.find(p => p.slug === slug);
    setProduct(foundProduct);
    setQuantity(1);
    
    if (foundProduct) {
      // Find related products (same fragrance family, excluding current)
      const related = products
        .filter(p => p.fragranceFamily === foundProduct.fragranceFamily && p.id !== foundProduct.id)
        .slice(0, 4); // Max 4
      
      // If we don't have enough related by family, just pad with others
      if (related.length < 4) {
        const others = products
          .filter(p => p.id !== foundProduct.id && !related.some(r => r.id === p.id))
          .slice(0, 4 - related.length);
        setRelatedProducts([...related, ...others]);
      } else {
        setRelatedProducts(related);
      }
    }
    
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-40 pb-24 min-h-screen bg-[var(--color-amode-ivory)] text-center">
        <Container>
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-[var(--color-amode-gold)] hover:underline uppercase tracking-widest text-sm">
            Return to Shop
          </Link>
        </Container>
      </div>
    );
  }

  const hasDiscount = product.originalPrice > product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const handleIncrement = () => {
    if (quantity < product.stock) setQuantity(q => q + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(q => q - 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-amode-ivory)]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[3/4] bg-[var(--color-amode-cream)]">
              {hasDiscount && (
                <div className="absolute top-4 left-4 z-10 bg-[var(--color-amode-black)] text-[var(--color-amode-ivory)] px-4 py-1 font-sans text-xs uppercase tracking-widest">
                  Save {discountPercentage}%
                </div>
              )}
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-amode-gold)] mb-4 block">
              {product.fragranceFamily} Family
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl text-[var(--color-amode-black)] mb-4">
              {product.name}
            </h1>
            
            {/* Price section */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-sans text-2xl text-[var(--color-amode-charcoal)]">
                ${product.price.toFixed(2)}
              </span>
              {hasDiscount && (
                <span className="font-sans text-lg text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="font-sans text-sm text-gray-500 uppercase tracking-widest ml-auto">
                {product.size}
              </span>
            </div>
            
            {/* Stock */}
            <div className="mb-8">
              {product.stock > 0 ? (
                <span className="inline-flex items-center gap-2 font-sans text-sm text-green-700">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  In Stock ({product.stock} available)
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 font-sans text-sm text-red-700">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Out of Stock
                </span>
              )}
            </div>

            <p className="font-sans text-gray-600 leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {/* Quantity */}
              <div className="flex items-center border border-[var(--color-amode-black)] w-full sm:w-1/3 h-12">
                <button 
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                  className="w-12 h-full flex items-center justify-center text-[var(--color-amode-charcoal)] hover:bg-[var(--color-amode-cream)] transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
                >
                  -
                </button>
                <span className="flex-1 text-center font-sans font-medium text-[var(--color-amode-black)]">
                  {quantity}
                </span>
                <button 
                  onClick={handleIncrement}
                  disabled={quantity >= product.stock}
                  className="w-12 h-full flex items-center justify-center text-[var(--color-amode-charcoal)] hover:bg-[var(--color-amode-cream)] transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
                >
                  +
                </button>
              </div>

              {/* Add to Cart & Buy Now */}
              <Button 
                variant="secondary" 
                className="w-full sm:w-1/3 h-12 !px-4"
                disabled={product.stock === 0}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button 
                variant="primary" 
                className="w-full sm:w-1/3 h-12 !px-4"
                disabled={product.stock === 0}
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>

            {/* Notes */}
            <div className="border-t border-b border-[var(--color-amode-cream)] py-6 mb-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <span className="block font-sans text-xs uppercase tracking-widest text-gray-400 mb-2">Top Notes</span>
                  <span className="font-serif text-sm text-[var(--color-amode-black)]">{product.topNotes.join(', ')}</span>
                </div>
                <div>
                  <span className="block font-sans text-xs uppercase tracking-widest text-gray-400 mb-2">Heart Notes</span>
                  <span className="font-serif text-sm text-[var(--color-amode-black)]">{product.heartNotes.join(', ')}</span>
                </div>
                <div>
                  <span className="block font-sans text-xs uppercase tracking-widest text-gray-400 mb-2">Base Notes</span>
                  <span className="font-serif text-sm text-[var(--color-amode-black)]">{product.baseNotes.join(', ')}</span>
                </div>
              </div>
            </div>
            
            {/* Meta */}
            <ul className="space-y-3 font-sans text-sm text-gray-600">
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-400 uppercase tracking-widest text-xs">Longevity</span> 
                <span className="font-medium text-[var(--color-amode-black)]">{product.longevity}</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-400 uppercase tracking-widest text-xs">Occasion</span> 
                <span className="font-medium text-[var(--color-amode-black)]">{product.occasion}</span>
              </li>
              <li className="flex justify-between pb-2">
                <span className="text-gray-400 uppercase tracking-widest text-xs">Category</span> 
                <span className="font-medium text-[var(--color-amode-black)]">{product.category}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 border-t border-[var(--color-amode-cream)] pt-24">
            <SectionHeading 
              title="You May Also Like" 
              subtitle="Explore More" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductDetails;
