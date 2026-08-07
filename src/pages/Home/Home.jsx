import React from 'react'
import useProducts from '../../hooks/useProducts'
import useCategories from '../../hooks/useCategories'
import Container from '../../components/common/Container'
import HeroBanner from './HeroBanner'
import SearchBar from '../../components/product/SearchBar/SearchBar'
import CategoryFilter from '../../components/product/CategoryFilter/CategoryFilter'
import SortDropdown from '../../components/product/SortDropdown/SortDropdown'
import ProductGrid from '../../components/product/ProductGrid/ProductGrid'

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

      <ProductGrid
        products={products}
        loading={loading}
        error={error}
      />
    </Container>
  )
}

export default Home