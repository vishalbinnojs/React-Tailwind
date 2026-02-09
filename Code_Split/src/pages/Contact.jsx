// Contact Section
const Contact = () => (
<section className="py-16 px-8 min-h-screen">
<h3 className="text-3xl font-bold text-center mb-10">Contact Us</h3>
<form className="max-w-xl mx-auto grid gap-4">
<input className="border p-3 rounded-lg" placeholder="Your Name" />
<input className="border p-3 rounded-lg" placeholder="Email Address" />
<textarea className="border p-3 rounded-lg" placeholder="Your Message" rows={4} />
<button className="bg-indigo-600 text-white py-3 rounded-xl font-semibold">
Send Message
</button>
</form>
</section>
);

export default Contact;