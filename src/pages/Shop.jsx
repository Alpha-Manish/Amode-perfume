import React, { useState, useMemo } from 'react';
import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import { products } from '../data/products';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFamily, setSelectedFamily] = useState('All');
  const [maxPrice, setMaxPrice] = useState(300);
  const [sortBy, setSortBy] = useState('featured');

  const families = ['All', ...new Set(products.map(p => p.fragranceFamily))];

  const filteredProducts = useMemo(() => {
    let result = products;

    // Search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) || 
        p.description.toLowerCase().includes(lowerQuery)
      );
    }

    // Category filter
    if (selectedFamily !== 'All') {
      result = result.filter(p => p.fragranceFamily === selectedFamily);
    }

    // Price filter
    result = result.filter(p => p.price <= maxPrice);

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // featured or default order
        break;
    }

    return result;
  }, [searchQuery, selectedFamily, maxPrice, sortBy]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-amode-ivory)]">
      <Container>
        <SectionHeading title="The Collection" subtitle="Shop All Fragrances" align="center" />
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-1/4 flex flex-col gap-8">
            {/* Search */}
            <div>
              <h3 className="font-serif text-xl mb-4 text-[var(--color-amode-black)]">Search</h3>
              <input 
                type="text" 
                placeholder="Search fragrances..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-b border-gray-300 bg-transparent py-2 px-1 focus:outline-none focus:border-[var(--color-amode-gold)] font-sans text-sm transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="font-serif text-xl mb-4 text-[var(--color-amode-black)]">Olfactive Family</h3>
              <ul className="space-y-3 font-sans text-sm text-gray-600">
                {families.map(family => (
                  <li key={family}>
                    <button 
                      onClick={() => setSelectedFamily(family)}
                      className={`hover:text-[var(--color-amode-gold)] transition-colors uppercase tracking-widest text-xs ${selectedFamily === family ? 'text-[var(--color-amode-gold)] font-semibold' : ''}`}
                    >
                      {family}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-serif text-xl mb-4 text-[var(--color-amode-black)]">Max Price: ${maxPrice}</h3>
              <input 
                type="range" 
                min="50" 
                max="500" 
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[var(--color-amode-gold)]"
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[var(--color-amode-cream)]">
              <span className="font-sans text-sm text-gray-500">{filteredProducts.length} Results</span>
              <div className="flex items-center gap-3">
                <label className="font-sans text-xs uppercase tracking-widest text-gray-500">Sort By:</label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none font-sans text-sm uppercase tracking-wider focus:outline-none cursor-pointer text-[var(--color-amode-black)]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Alphabetical: A-Z</option>
                  <option value="name-desc">Alphabetical: Z-A</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-[var(--color-amode-black)] mb-4">No fragrances found.</p>
                <p className="font-sans text-gray-500">Try adjusting your filters or search criteria.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedFamily('All');
                    setMaxPrice(300);
                  }}
                  className="mt-6 font-sans text-xs uppercase tracking-widest text-[var(--color-amode-gold)] hover:text-black transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
