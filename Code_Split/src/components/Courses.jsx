const Courses = () => (
<section className={` py-16 px-8 `}>
<h3 className="text-3xl font-bold text-center mb-10">Popular Courses</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{["React", "Node.js", "UI/UX Design", 'Mongo DB', "Tailwind", "Material UI", "Daisy UI", "ExpressJS", "NextJS"].map((course) => (
<div key={course} className="p-6 rounded-2xl shadow-lg">
<h4 className="text-xl font-semibold mb-2">{course}</h4>
<p className="text-sm mb-4">
Master {course} with hands‑on projects and real‑world examples.
</p>
<button className="text-indigo-600 font-medium">Learn More →</button>
</div>
))}
</div>
</section>
)

export default Courses;