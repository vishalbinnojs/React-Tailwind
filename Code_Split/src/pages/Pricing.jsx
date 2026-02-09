// Pricing Section
const Pricing = () => (
<section className="py-16 bg-gray-50 px-8 min-h-screen">
<h3 className="text-3xl font-bold text-center mb-10">Pricing Plans</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 shadow rounded-2xl text-center">
<h4 className="text-xl font-semibold mb-2">Basic</h4>
<p className="text-3xl font-bold mb-4">₹499</p>
<p className="text-sm mb-6">Access to basic courses</p>
<button className="border px-4 py-2 rounded-lg">Choose Plan</button>
</div>
<div className="p-6 shadow-lg rounded-2xl text-center border-2 border-indigo-600">
<h4 className="text-xl font-semibold mb-2">Pro</h4>
<p className="text-3xl font-bold mb-4">₹999</p>
<p className="text-sm mb-6">All courses + projects</p>
<button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Most Popular</button>
</div>
<div className="p-6 shadow rounded-2xl text-center">
<h4 className="text-xl font-semibold mb-2">Premium</h4>
<p className="text-3xl font-bold mb-4">₹1999</p>
<p className="text-sm mb-6">1:1 mentorship + everything</p>
<button className="border px-4 py-2 rounded-lg">Choose Plan</button>
</div>
</div>
</section>
);

export default Pricing;