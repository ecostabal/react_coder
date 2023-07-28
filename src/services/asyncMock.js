const productos = [
   {
       "id": 1,
       "img": "https://images.unsplash.com/photo-1529927066849-79b791a69825?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
       "title": "Collar ajustable",
       "description": "Collar resistente y ajustable para perros de todos los tamaños.",
       "price": 19.99,
       "stock": 10
    },
    {
       "id": 2,
       "img": "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
       "title": "Correa extensible",
       "description": "Correa resistente y extensible para mayor comodidad durante los paseos.",
       "price": 14.99,
       "stock": 5
    },
    {
       "id": 3,
       "img": "https://images.unsplash.com/photo-1558929996-da64ba858215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
       "title": "Juguete mordedor",
       "description": "Juguete de goma duradero para satisfacer el instinto de morder de tu perro.",
       "price": 9.99,
       "stock": 15
    },
    {
       "id": 4,
       "img": "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2428&q=80",
       "title": "Cama acolchada",
       "description": "Cama suave y acolchada para que tu perro descanse cómodamente.",
       "price": 29.99,
       "stock": 8
    },
    {
       "id": 5,
       "img": "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
       "title": "Comedero de acero inoxidable",
       "description": "Comedero resistente de acero inoxidable para facilitar la alimentación de tu perro.",
       "price": 12.99,
       "stock": 12
    },
    {
       "id": 6,
       "img": "https://images.unsplash.com/photo-1477973770766-6228305816df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
       "title": "Chaqueta impermeable",
       "description": "Chaqueta impermeable para proteger a tu perro de la lluvia y el viento.",
       "price": 24.99,
       "stock": 3
    },
    {
       "id": 7,
       "img": "https://images.unsplash.com/photo-1562317305-58a17fe2c09e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
       "title": "Cepillo de pelo",
       "description": "Cepillo suave para el pelo de tu perro, evitando enredos y nudos.",
       "price": 7.99,
       "stock": 20
    },
    {
       "id": 8,
       "img": "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
       "title": "Snacks saludables",
       "description": "Snacks naturales y saludables para premiar a tu perro durante el entrenamiento.",
       "price": 5.99,
       "stock": 18
    },
    {
       "id": 9,
       "img": "https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
       "title": "Arnés acolchado",
       "description": "Arnés cómodo y acolchado para pasear a tu perro sin lastimar su cuello.",
       "price": 17.99,
       "stock": 7
    },
    {
       "id": 10,
       "img": "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
       "title": "Pelota de tenis",
       "description": "Pelota de tenis resistente para que tu perro disfrute de jugar al lanzar y atrapar.",
       "price": 3.99,
       "stock": 25
    },
    {
       "id": 11,
       "img": "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
       "title": "Transportín plegable",
       "description": "Transportín plegable y ligero para llevar a tu perro de manera segura.",
       "price": 39.99,
       "stock": 4
    },
    {
       "id": 12,
       "img": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
       "title": "Bozal ajustable",
       "description": "Bozal ajustable para evitar que tu perro muerda o ladre de forma excesiva.",
       "price": 9.99,
       "stock": 9
    }
];

function getData () {
    return new Promise ((resolve, reject) => {
      setTimeout( () => {
         const date = new Date().toLocaleDateString;
         resolve(productos, date);
      }, 1000);
    });
}


export function getProductData (idURL) {
   return new Promise ((resolve, reject) => {
      const productRequested = productos.find(
         (item) => item.id === Number(idURL)
      )
      setTimeout( () => {
        resolve(productRequested);
     }, 1000);
   });
}

export default getData;