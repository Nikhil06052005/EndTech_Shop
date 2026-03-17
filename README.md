# 🛍️ E-Commerce Store

A modern, responsive e-commerce web application built with **React**, **Vite**, and **Redux**. Browse products, add items to cart, and manage your shopping experience seamlessly!

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-19.2.4-blue?logo=react)

---

## ✨ Features

- ⚡ **Fast & Responsive** - Built with Vite for blazing-fast performance
- 🛒 **Shopping Cart** - Add/remove products with Redux state management
- 📱 **Mobile Friendly** - Fully responsive design for all devices
- 🎯 **Multiple Categories** - Browse Electronics, Fashion, Beauty, Sports & more
- 🔄 **React Router** - Smooth navigation between pages
- ⭐ **Clean UI** - Modern and intuitive user interface
- 🎨 **Icons** - Beautiful icons with react-icons

---

## 📸 Screenshots

### Product Showcase
![Product Gallery](./src/assets/image11.jpg)

### Shopping Experience
![Shopping Experience](./src/assets/image22.jpg)

### Featured Categories
| Electronics | Fashion |
|-------------|---------|
| ![Electronics](./src/assets/electronics.png) | ![Fashion](./src/assets/fashion.png) |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/e-commerce.git
cd e-commerce

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

---

## 📦 Project Structure

```
src/
├── Pages/
│   ├── home/          # Home page
│   ├── Shop/          # Shop/catalog page
│   ├── Cart/          # Shopping cart page
│   └── Contact/       # Contact page
├── Components/
│   ├── Nav/           # Navigation bar
│   ├── Footer/        # Footer component
│   ├── Product/       # Product card component
│   └── CartCard/      # Cart item component
├── redux/
│   ├── store.js       # Redux store configuration
│   └── cartSlice.js   # Redux cart slice
├── assets/            # Images and static files
├── App.jsx            # Main app component
└── main.jsx           # Application entry point
```

---

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

---

## 📚 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** | UI library for component-based development |
| **Vite** | Lightning-fast build tool and dev server |
| **Redux Toolkit** | State management for cart and app state |
| **React Router v7** | Client-side routing |
| **React Icons** | Beautiful icon library |

---

## 📄 Dependencies

### Runtime
- `react` - ^19.2.4
- `react-dom` - ^19.2.4
- `react-router-dom` - ^7.13.1
- `react-redux` - ^9.2.0
- `@reduxjs/toolkit` - ^2.11.2
- `react-icons` - ^5.6.0

### Development
- `vite` - ^8.0.0
- `eslint` - ^9.39.4
- And other dev tools...

---

## 🎯 Features in Detail

### 🏠 Home Page
- Hero section with featured products
- Category showcase
- Quick product preview

### 🏪 Shop Page
- Complete product catalog
- Filter by category (Electronics, Fashion, Beauty, Sports)
- Product cards with images and prices

### 🛒 Shopping Cart
- View all added items
- Update quantities
- Remove items
- Persistent cart state with Redux
- Cart summary with total price

### 📞 Contact Page
- Contact form
- Get in touch with customer support

---

## 💡 How to Use

1. **Browse Products** - Navigate to the Shop page to see all available products
2. **Add to Cart** - Click the add to cart button on any product
3. **View Cart** - Click the cart icon to view your shopping cart
4. **Manage Items** - Adjust quantities or remove items from cart
5. **Checkout** - (Coming soon)

---

## 🔧 Development

### Add a New Product

Edit `src/dummydata.js` and add your product object:

```javascript
{
  id: 1,
  name: "Product Name",
  price: 999,
  category: "electronics",
  image: require("./assets/image1.jpg"),
  description: "Product description"
}
```

### Add a New Page

1. Create a new folder in `src/Pages/`
2. Create component file (e.g., `Product.jsx`)
3. Add route in `src/App.jsx`:

```javascript
<Route path='/product' element={<Product />} />
```

---

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1200px+)

---

## 🐛 Known Issues

- Fix missing `ec.png` asset in Cart page (currently unresolved import)
- Contact page implementation pending

---

## 🚧 Future Enhancements

- [ ] Payment gateway integration
- [ ] User authentication
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order history
- [ ] Admin dashboard
- [ ] Product search and advanced filtering
- [ ] Multiple language support

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork this repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 👨‍💻 Author

**Your Name** - [@yourhandle](https://github.com/yourhandle)

---

## 📞 Contact & Support

- 📧 Email: your.email@example.com
- 💬 Issues: [GitHub Issues](https://github.com/yourusername/e-commerce/issues)
- 🐦 Twitter: [@yourhandle](https://twitter.com/yourhandle)

---

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Made with ❤️ by [Your Name]**

*Last Updated: March 2026*
