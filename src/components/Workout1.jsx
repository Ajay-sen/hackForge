import React from 'react';

const Workout1 = () => {
  const posts = [
    {
      id: 1,
      title: 'Running',
      image: '../src/assets/img/wkt1.jpg',
      description: 'Benefits: Improves cardiovascular health, burns calories, strengthens muscles, reduces stress. Helps with: Cardiovascular diseases, weight management, stress relief',
    },
    {
      id: 2,
      title: 'Weightlifting',
      image: '../src/assets/img/wkt2.jpg',
      description: 'Benefits: Builds muscle mass, increases strength, boosts metabolism, improves bone density.Helps with: Muscle building, weight management, bone health',
    },

    {
        id: 3,
        title: 'Yoga',
        image: '../src/assets/img/wkt3.webp',
        description: 'Benefits: Increases flexibility, improves balance, reduces stress, promotes relaxation. Helps with: Flexibility, stress relief, mental health.',
      },

      {
        id: 4,
        title: 'Swimming',
        image: '../src/assets/img/wkt4.jpg',
        description: 'Benefits: Low-impact exercise, works entire body, improves cardiovascular health, builds endurance. Helps with: Cardiovascular diseases, weight management, joint pain.',
      },
      {
        id: 5,
        title: 'Cycling',
        image: '../src/assets/img/wkt5.jpg',
        description: 'Benefits: Builds leg strength, improves cardiovascular health, burns calories, reduces stress. Helps with: Leg muscle development, cardiovascular diseases, stress relief',
      },
      {
        id: 6,
        title: 'High Intensity',
        image: '../src/assets/img/wkt6.jpg',
        description: 'Benefits: Burns calories quickly, improves cardiovascular health, increases metabolism.Helps with: Weight management, cardiovascular diseases, metabolism boost',
      },
    // Add more posts here
  ];

  return (
    <div>
    <div className=" w-full h-16 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-center absolute top-0 left-0 right-0 mb-8">Your Workout Blog!</h1>
      
    </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
{posts.map(post => (
  <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden border-6">
    <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700">{post.description}</p>
    </div>
  </div>
))}
</div>
</div>
  );
};

export default Workout1;
