import React from "react";
import { lazy,Suspense } from "react";
import Hero from "../components/Hero";
import Testimonials from '../components/Testimonials'
// import Courses from "../components/Courses";
// import Features from "../components/Features";


const Courses = lazy(()=>import('../components/Courses'))
const Features = lazy(()=>import('../components/Features'))

const Home = () => {
  return (
    <>
  
      {/* Hero Section */}
      <Hero />
      {/* Courses */}
      <Suspense fallback={<h1 className="text-7xl animate-pulse">Courses Loading....</h1>}>
        <Courses />
      </Suspense>
      {/* Features */}
      <Suspense fallback={<h1 className="text-7xl animate-pulse">Features Loading....</h1>}>
      <Features />
      </Suspense>
      {/* Testimonials */}
      <Testimonials />
      {/* Call To Action */}
      <CTA />
    </>
  );
};

const CTA = () => {
  return(
  <section className="py-16 bg-indigo-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Start Learning?</h3>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold">
          Join Now
        </button>
      </section>
  
  )
}

export default Home;
