import React from 'react'
import useProducts from '../../hooks/useProducts'
import useCategories from '../../hooks/useCategories'
import Container from '../../components/common/Container'
import HeroBanner from './HeroBanner'
import SearchBar from '../../components/product/SearchBar/SearchBar'
import CategoryFilter from '../../components/product/CategoryFilter/CategoryFilter'
import SortDropdown from '../../components/product/SortDropdown/SortDropdown'
import ProductGrid from '../../components/product/ProductGrid/ProductGrid'
import Pagination from '../../components/product/Pagination/Pagination'

const Home = () => {
  const {
    products,
    loading,
    error,
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
    page,
    setPage,
    totalPages,
    totalProducts,
  } = useProducts();

  const { categories } = useCategories();

  return (
    <Container>
      <HeroBanner />

      <section className="w-full flex flex-col gap-4 mb-8 md:justify-between md:items-center md:flex-row">
        <SearchBar
          value={search}
          onChange={setSearch}
        />
        
        <div className="flex gap-4">
          <CategoryFilter
            categories={categories}
            value={category}
            onChange={setCategory}
          />
          <SortDropdown
            value={sort}
            onChange={setSort}
          />
        </div>
      </section>


      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-gray-500">
          Showing {products.length} of {totalProducts} products
        </p>
      </div>

      <ProductGrid
        products={products}
        loading={loading}
        error={error}
      />

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        showFirstLast
        showPrevNext
        siblingCount={1}
        boundaryCount={1}
        scrollToTop
      />
    </Container>
  )
}

export default Home