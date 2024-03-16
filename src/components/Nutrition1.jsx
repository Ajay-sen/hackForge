import React from 'react';

const Nutrition1 = () => {
  const posts = [
    {
      id: 1,
      title: 'Spinach',
      image: '../src/assets/img/nut2.jpeg',
      description: 'Benefits: Rich in iron and vitamins, improves eyesight. Helps with: Anemia, macular degeneration.',
    },
    {
      id: 2,
      title: 'Salmon',
      image: '../src/assets/img/nut3.jpg',
      description: 'Benefits: High in omega-3 fatty acids, promotes heart health. Helps with: Cardiovascular diseases, inflammation',
    },

    {
        id: 3,
        title: 'Dairy',
        image: '../src/assets/img/nut4.jpeg',
        description: 'Benefits: Excellent source of calcium and protein, promotes bone health and muscle growth. Helps with: Osteoporosis, muscle weakness.',
      },

      {
        id: 4,
        title: 'Green Vegetable',
        image: '../src/assets/img/nut6.jpg',
        description: 'Benefits: Packed with vitamins, minerals, and antioxidants, supports immune function and reduces inflammation. Helps with: Boosting immunity, reducing the risk of chronic diseases',
      },
      {
        id: 5,
        title: 'Beverages',
        image: '../src/assets/img/nut7.jpeg',
        description: 'Benefits: Contains antioxidants, boosts metabolism, may improve brain function. Helps with: Weight management, cognitive function',
      },
      {
        id: 6,
        title: 'Meat',
        image: '../src/assets/img/nut5.jpeg',
        description: 'Benefits: High in protein, provides essential amino acids for muscle repair and growth. Helps with: Muscle building, energy production.',
      },
    // Add more posts here
  ];

  return (
    <div>
    <div className=" w-full h-16 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-center absolute top-0 left-0 right-0 mb-8">Your Nutrition Blog!</h1>
      
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

export default Nutrition1;
