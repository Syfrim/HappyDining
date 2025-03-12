import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="pt-8 overflow-x-hidden">
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://z-p3-scontent.fsin15-1.fna.fbcdn.net/v/t39.30808-6/399291814_723105619839691_1999639501146818451_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=FDok1JQvALMQ7kNvgFvpIsv&_nc_oc=AdjYbeLpqMCU-tALu8Z_RtoRVhSVHzG2JmUpNqFULwZL6xGCX9h8wO-M8Q6FLnJx3N0&_nc_zt=23&_nc_ht=z-p3-scontent.fsin15-1.fna&_nc_gid=A6777dM_X6II5_yxbLTNmtX&oh=00_AYENXwgZc0NbIHd-D2_E0QXL2QeWOo0JAtV5ks2J_azuFw&oe=67D58DE5')`,
          width: '100%',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-0 md:p-8">
            <h2 className="text-5xl font-bold mb-4">Welcome to Happy Dining Seafood</h2>
            <p className="text-xl mb-8">Experience authentic Chinese cuisine in a modern setting</p>
            <a 
              href="#menu" 
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto p-0 md:px-4 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 p-4 md:p-0">
            <h3 className="text-3xl font-semibold">Our Story</h3>
            <p className="text-gray-600">
              Founded in 2020, Happy Dining Seafood brings the authentic flavors of Chinese cuisine
              to your table. Our chefs combine traditional recipes with modern cooking
              techniques to create an unforgettable dining experience.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <img 
              src="https://z-p3-scontent.fsin15-2.fna.fbcdn.net/v/t39.30808-6/440095099_827300652753520_7208098874670494831_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UTXP_QxRNj4Q7kNvgFbCPo-&_nc_oc=AdjB7qZzEK50vvZpaFr9UU3phRJo8ZoTGjqnK4vb7yaTAwInQTHPiynuGBco4HRL9dg&_nc_zt=23&_nc_ht=z-p3-scontent.fsin15-2.fna&_nc_gid=AuyEeipt3wsbCdURbjTMykR&oh=00_AYHMrEjETdEqL0CyGlXqmaN7V7a91MH24M4ZkbxlsIF-IA&oe=67D5B53F" 
              alt="Restaurant Dishes" 
              className="rounded-lg shadow-lg w-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;