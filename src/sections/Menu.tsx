import React from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Crayfish",
    description: "Spicy crayfish with garlic and chili",
    price: "$15.99",
    image: "https://z-p3-scontent.fsin15-1.fna.fbcdn.net/v/t39.30808-6/467152550_954388963378021_1551812615816586542_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2DHc_RCYAhQQ7kNvgHIFkSI&_nc_oc=Adg3vyY3L9kaVcpEDBQCyZvZCOfuXTJ-fAgjr0pE2oPYK0tMSSM5yxXOUCxS1I8FEBQ&_nc_zt=23&_nc_ht=z-p3-scontent.fsin15-1.fna&_nc_gid=ASmLhLk7L28XQiXqpdccx_s&oh=00_AYH5xMARJfruSmW8ifUEM9nrskIiPCgEyOu3mChS5DA11A&oe=67D5B7FE",
    category: "Main Course"
  },
  {
    name: "Salted Egg Crab",
    description: "Crab cooked in salted egg sauce",
    price: "$55.99",
    image: "https://z-p3-scontent.fsin15-1.fna.fbcdn.net/v/t39.30808-6/462108715_925528629597388_7746406686175764603_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fpijbp7QB_IQ7kNvgECP06B&_nc_oc=AdixU-mgqlgykELQ8IBaRExzqFn-ag9DghheIuX--B67jLylAHAmSP4Pnnx5RwmRcKs&_nc_zt=23&_nc_ht=z-p3-scontent.fsin15-1.fna&_nc_gid=AgmlFwuMfx-E1HbGw3UE9Pk&oh=00_AYF2NwRVN2Ze30VNmKJm_a39hw6JdKpedfXLATQE6-UsnA&oe=67D5B3DD",
    category: "Signature Dish"
  },
  {
    name: "Stir Fried Clams",
    description: "Clams stir fried with garlic and chili",
    price: "$10.99",
    image: "https://z-p3-scontent.fsin15-1.fna.fbcdn.net/v/t39.30808-6/462151316_925528646264053_6451347340550662804_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2z9_P-uZK-EQ7kNvgFwXlVU&_nc_oc=Adhfjnt0HCi8KB_vgsxJ2-zO7JUmih-o9Ih8AcdOUsplg6BSpr4kDxJO5ByPWteXVX0&_nc_zt=23&_nc_ht=z-p3-scontent.fsin15-1.fna&_nc_gid=A_PRL_EdO1iU1fM1szAVL4q&oh=00_AYEnACFNPwsTwA39P_ucsSz1J9OaEXG4d9Eqs6ZAqdd2YA&oe=67D5A02A",
    category: "Main Course"
  },
  {
    name: "香辣小龙虾",
    description: "小辣椒和蒜蓉炒的小龙虾",
    price: "$15.99",
    image: "https://z-p3-scontent.fsin15-1.fna.fbcdn.net/v/t39.30808-6/467152550_954388963378021_1551812615816586542_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2DHc_RCYAhQQ7kNvgHIFkSI&_nc_oc=Adg3vyY3L9kaVcpEDBQCyZvZCOfuXTJ-fAgjr0pE2oPYK0tMSSM5yxXOUCxS1I8FEBQ&_nc_zt=23&_nc_ht=z-p3-scontent.fsin15-1.fna&_nc_gid=ASmLhLk7L28XQiXqpdccx_s&oh=00_AYH5xMARJfruSmW8ifUEM9nrskIiPCgEyOu3mChS5DA11A&oe=67D5B7FE",
    category: "主食"
  },
  {
    name: "咸蛋螃蟹",
    description: "咸蛋酱炒的螃蟹",
    price: "$55.99",
    image: "https://z-p3-scontent.fsin15-1.fna.fbcdn.net/v/t39.30808-6/462108715_925528629597388_7746406686175764603_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fpijbp7QB_IQ7kNvgECP06B&_nc_oc=AdixU-mgqlgykELQ8IBaRExzqFn-ag9DghheIuX--B67jLylAHAmSP4Pnnx5RwmRcKs&_nc_zt=23&_nc_ht=z-p3-scontent.fsin15-1.fna&_nc_gid=AgmlFwuMfx-E1HbGw3UE9Pk&oh=00_AYF2NwRVN2Ze30VNmKJm_a39hw6JdKpedfXLATQE6-UsnA&oe=67D5B3DD",
    category: "招牌菜"
  },
  {
    name: "甜辣炒蛤蜊",
    description: "甜酱和辣椒炒的蛤蜊",
    price: "$10.99",
    image: "https://z-p3-scontent.fsin15-1.fna.fbcdn.net/v/t39.30808-6/462151316_925528646264053_6451347340550662804_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2z9_P-uZK-EQ7kNvgFwXlVU&_nc_oc=Adhfjnt0HCi8KB_vgsxJ2-zO7JUmih-o9Ih8AcdOUsplg6BSpr4kDxJO5ByPWteXVX0&_nc_zt=23&_nc_ht=z-p3-scontent.fsin15-1.fna&_nc_gid=A_PRL_EdO1iU1fM1szAVL4q&oh=00_AYEnACFNPwsTwA39P_ucsSz1J9OaEXG4d9Eqs6ZAqdd2YA&oe=67D5A02A",
    category: "主食"
  },
  // Add more menu items as needed
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className="menu-card bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-red-600 font-semibold mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="text-2xl font-bold text-red-600">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;