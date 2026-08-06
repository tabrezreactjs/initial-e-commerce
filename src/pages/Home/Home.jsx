import React from 'react'
import Container from '../../components/common/Container'

const Home = () => {
  return (
    <Container>
      <section className="w-full py-20">
        <h1 className="text-5xl font-bold">
          Welcome to ShopX
        </h1>

        <p className="text-slate-600 mt-6">
          Modern shopping experience built with React, Tailwind CSS and Platzi Fake Store API.
        </p>
      </section>
    </Container>
  )
}

export default Home