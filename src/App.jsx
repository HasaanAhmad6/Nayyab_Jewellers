import { useMemo, useState } from 'react';
import { 
  ShoppingBag, 
  X, 
  Heart, 
  Star, 
  Sparkles, 
  Phone, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Info, 
  Award, 
  MessageSquare,
  ChevronRight,
  Plus,
  Minus,
  Trash2,
  Check
} from 'lucide-react';

const WHATSAPP_NUMBER = '923190224901';

const products = [
  {
    id: 1,
    name: 'Gold Plated Necklace Set',
    category: 'Necklaces',
    price: 9000,
    image: '/Goldplatedset.jpeg',
    material: '22K Gold Plated Artificial',
    rating: 4.9,
    reviewsCount: 24,
    desc: 'Bespoke design showcasing intricate hand carvings. Comes with a premium necklace, matching earrings, and adjustable chain extension.',
    specs: {
      purity: '22K Gold Plating over Brass',
      stone: 'High-grade Zircon crystals',
      weight: 'Approx. 45 grams'
    }
  },
  {
    id: 2,
    name: 'Emerald Signature Ring',
    category: 'Rings',
    price: 6200,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
    material: '925 Sterling Silver',
    rating: 4.8,
    reviewsCount: 18,
    desc: 'A striking statement piece featuring a vibrant emerald center cushion cut, surrounded by a double halo of sparkling premium zircon diamonds.',
    specs: {
      purity: '92.5% Pure Sterling Silver',
      stone: 'AAA+ Lab Emerald & White Zircon',
      weight: 'Approx. 5.2 grams'
    }
  },
  {
    id: 3,
    name: 'Noor Pearl Necklace',
    category: 'Necklaces',
    price: 7400,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
    material: 'Freshwater Pearls',
    rating: 5.0,
    reviewsCount: 12,
    desc: 'Lustrous, hand-selected freshwater pearls strung perfectly to sit elegantly on the collar. Finished with a gold plated security lock.',
    specs: {
      purity: 'Genuine Cultured Freshwater Pearls',
      stone: 'Natural Pearls',
      weight: 'Approx. 30 grams'
    }
  },
  {
    id: 4,
    name: 'Minimal Gold Hoops',
    category: 'Earrings',
    price: 2900,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80',
    material: '18K Gold Plated Silver',
    rating: 4.7,
    reviewsCount: 31,
    desc: 'Lightweight, everyday classic hoops designed with an easy-snap locking mechanism. Hypoallergenic and highly polished for a lasting mirror shine.',
    specs: {
      purity: '18K Gold Plating over Sterling Silver',
      stone: 'None',
      weight: 'Approx. 3.5 grams'
    }
  },
  {
    id: 5,
    name: 'Indian Pearl Garland (Mala)',
    category: 'Mala & Chains',
    price: 3500,
    image: '/mala.jpeg',
    material: 'Handcrafted Artificial Pearl',
    rating: 4.9,
    reviewsCount: 15,
    desc: 'A gorgeous multi-layered traditional pearl garland (Mala) ideal for grooms, festive events, and weddings. Hand-threaded with antique gold spacers.',
    specs: {
      purity: 'Gold Plated Alloy Accents',
      stone: 'Glass Pearls & Red Ruby beads',
      weight: 'Approx. 80 grams'
    }
  },
  {
    id: 6,
    name: 'Gold Plated Pearl Set',
    category: 'Necklaces',
    price: 5000,
    image: '/set.jpeg',
    material: 'Gold Plated Artificial',
    rating: 4.8,
    reviewsCount: 22,
    desc: 'Charming daily-to-formal set featuring drop-shaped pearls suspended from delicate gold plated floral elements. Set includes necklace and earrings.',
    specs: {
      purity: '22K Gold Plated Alloy',
      stone: 'Polished Faux Pearls',
      weight: 'Approx. 18 grams'
    }
  },
  {
    id: 7,
    name: 'Teardrop Sapphire Earrings',
    category: 'Earrings',
    price: 4800,
    image: 'https://images.unsplash.com/photo-1635767790038-36447fee5209?auto=format&fit=crop&w=900&q=80',
    material: '925 Sterling Silver',
    rating: 4.9,
    reviewsCount: 9,
    desc: 'Graceful teardrop-shaped earrings accented with royal blue sapphires and fine micro-paved crystals. Reflects light beautifully with every movement.',
    specs: {
      purity: '92.5% Sterling Silver',
      stone: 'Lab Sapphire & Zircon',
      weight: 'Approx. 4.8 grams'
    }
  },
  {
    id: 8,
    name: 'Luxury Royal Bangle',
    category: 'Bracelets & Bangles',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80',
    material: '22K Gold Plated Brass',
    rating: 4.9,
    reviewsCount: 17,
    desc: 'A thick, traditional royal bangle adorned with filigree work and floral engravings. Fits securely with an elegant side clasp closure.',
    specs: {
      purity: '22K Gold Plating over Brass base',
      stone: 'Emerald & Ruby Quartz detailing',
      weight: 'Approx. 28 grams'
    }
  }
];

const reviews = [
  {
    name: 'Hina A. (Lahore)',
    text: 'Delivery was fast and the bridal set looked even better than the pictures. The 22K gold polish is exceptionally brilliant!',
    rating: 5,
    date: '1 week ago'
  },
  {
    name: 'Maryam R. (Gujranwala)',
    text: 'Excellent quality, reasonable rates, and very professional customer support. Customizing my ring size was super easy.',
    rating: 5,
    date: '3 weeks ago'
  },
  {
    name: 'Sana M. (Islamabad)',
    text: 'I ordered 2 silver rings through WhatsApp and the process was super smooth. Will definitely purchase again!',
    rating: 5,
    date: '1 month ago'
  }
];

const formatPKR = (price) => `Rs. ${price.toLocaleString('en-PK')}`;

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  
  // Custom design form states
  const [customName, setCustomName] = useState('');
  const [customCategory, setCustomCategory] = useState('Necklaces');
  const [customMetal, setCustomMetal] = useState('22K Gold Plated');
  const [customDesc, setCustomDesc] = useState('');
  const [customBudget, setCustomBudget] = useState('Under Rs. 10,000');
  const [customSuccess, setCustomSuccess] = useState(false);

  // Configuration states for Modal
  const [modalMetal, setModalMetal] = useState('');
  const [modalSize, setModalSize] = useState('Standard');
  const [modalNote, setModalNote] = useState('');

  const categories = useMemo(
    () => ['All', ...new Set(products.map((product) => product.category))],
    []
  );

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const handleOpenModal = (product) => {
    setActiveProduct(product);
    setModalMetal(product.material);
    setModalSize(product.category === 'Rings' ? '7' : product.category === 'Bracelets & Bangles' ? '2.4' : 'Standard');
    setModalNote('');
  };

  const addConfiguredToCart = () => {
    if (!activeProduct) return;
    const configuredItem = {
      ...activeProduct,
      configuredMetal: modalMetal,
      configuredSize: modalSize,
      configuredNote: modalNote,
      cartId: `${activeProduct.id}-${modalMetal}-${modalSize}-${modalNote}-${Date.now()}`
    };

    setCart((current) => {
      // Check if identical item already in cart
      const existingIndex = current.findIndex(
        (item) => 
          item.id === activeProduct.id && 
          item.configuredMetal === modalMetal && 
          item.configuredSize === modalSize && 
          item.configuredNote === modalNote
      );

      if (existingIndex > -1) {
        const nextCart = [...current];
        nextCart[existingIndex] = {
          ...nextCart[existingIndex],
          quantity: (nextCart[existingIndex].quantity || 1) + 1
        };
        return nextCart;
      }

      return [...current, { ...configuredItem, quantity: 1 }];
    });

    setActiveProduct(null);
    setIsCartOpen(true);
  };

  const updateQuantity = (cartId, delta) => {
    setCart((current) => 
      current.map((item) => {
        if (item.cartId === cartId) {
          const nextQty = (item.quantity || 1) + delta;
          return nextQty > 0 ? { ...item, quantity: nextQty } : item;
        }
        return item;
      }).filter((item) => (item.quantity || 1) > 0)
    );
  };

  const removeFromCart = (cartId) => {
    setCart((current) => current.filter((item) => item.cartId !== cartId));
  };

  const whatsappDirectOrder = (product, metal, size, note) => {
    const text = `Assalam o Alaikum! I want to order this configured item:
*Product:* ${product.name}
*Metal/Polish:* ${metal || product.material}
*Size:* ${size}
${note ? `*Note/Engraving:* ${note}` : ''}
*Price:* ${formatPKR(product.price)}

Please confirm my order details!`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const whatsappCartLink =
    cart.length === 0
      ? '#'
      : `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          `Assalam o Alaikum! I would like to place an order for the following items:\n\n${cart
            .map((item, index) => {
              const metalStr = item.configuredMetal ? ` (${item.configuredMetal})` : '';
              const sizeStr = item.configuredSize && item.configuredSize !== 'Standard' ? ` [Size: ${item.configuredSize}]` : '';
              const noteStr = item.configuredNote ? ` *Notes: ${item.configuredNote}*` : '';
              return `${index + 1}. *${item.name}* x${item.quantity}${metalStr}${sizeStr}${noteStr} - ${formatPKR(item.price * item.quantity)}`;
            })
            .join('\n')}\n\n*Cart Total:* ${formatPKR(cartTotal)}\n\n*Delivery details:*\nName:\nAddress:\nPhone:\nCity:`
        )}`;

  const handleCustomConsultation = (e) => {
    e.preventDefault();
    if (!customName || !customDesc) return;

    const message = `Assalam o Alaikum Waseem Bhai! I want to request a Custom Jewellery Design Consultation:
*Customer Name:* ${customName}
*Category:* ${customCategory}
*Desired Metal:* ${customMetal}
*Design Details:* ${customDesc}
*Est. Budget:* ${customBudget}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    setCustomSuccess(true);
    setCustomName('');
    setCustomDesc('');
    setTimeout(() => setCustomSuccess(false), 5000);
  };

  return (
    <div className="store-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">
          <Sparkles className="gold-sparkle" size={20} />
          <div className="brand-text">
            NAYYAB <span className="brand-accent">JEWELLERS</span>
            <span className="brand-subtitle">by Waseem Ahmad</span>
          </div>
        </div>
        
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#collection">Collection</a>
          <a href="#custom-design">Custom Design</a>
          <a href="#why-us">Why Us</a>
          <a href="#reviews">Reviews</a>
        </div>

        <div className="nav-actions">
          <button className="cart-trigger-btn" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={20} />
            <span className="cart-text">Cart</span>
            {cartItemCount > 0 && <span className="cart-count-badge">{cartItemCount}</span>}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="eyebrow-container">
            <span className="gold-line"></span>
            <p className="eyebrow">Exquisite Craftsmanship</p>
            <span className="gold-line"></span>
          </div>
          <h1>Timeless Elegance & Bespoke Luxury</h1>
          <p className="hero-description">
            Explore authentic Gold plating, Sterling Silver, and premium hand-carved bridal collections based in Gujranwala. Designed to make every occasion unforgettable.
          </p>
          <div className="hero-cta-group">
            <a className="primary-btn" href="#collection">
              Explore Collection <ChevronRight size={16} />
            </a>
            <a className="outline-btn" href="#custom-design">
              Custom Consultation
            </a>
          </div>
        </div>
      </header>

      {/* Trust Badges */}
      <section className="trust-badges">
        <div className="badge-card">
          <Award className="badge-icon" size={28} />
          <h3>Guaranteed Purity</h3>
          <p>925 Sterling Silver & certified 22K Gold plating processes.</p>
        </div>
        <div className="badge-card">
          <Sparkles className="badge-icon" size={28} />
          <h3>Bespoke Creations</h3>
          <p>Hand-crafted designs customized exactly to your size & style.</p>
        </div>
        <div className="badge-card">
          <ShieldCheck className="badge-icon" size={28} />
          <h3>Secure COD Shipping</h3>
          <p>Safe insured delivery across Pakistan with Cash on Delivery options.</p>
        </div>
        <div className="badge-card">
          <Phone className="badge-icon" size={28} />
          <h3>Direct WhatsApp Support</h3>
          <p>Instant orders & custom tracking direct with Waseem Ahmad.</p>
        </div>
      </section>

      {/* Catalog Section */}
      <main>
        <section className="collection" id="collection">
          <div className="section-head">
            <h2>Our Signature Collections</h2>
            <div className="title-divider"></div>
            <p>Filter by category, select variations, and order instantly. Each purchase is handled with personal care.</p>
          </div>

          <div className="filters">
            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? 'chip active' : 'chip'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid">
            {filteredProducts.map((product) => (
              <article className="card" key={product.id} onClick={() => handleOpenModal(product)}>
                <div className="card-image-wrapper">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <div className="card-overlay">
                    <span className="quick-view-text">Customize & Order</span>
                  </div>
                  <span className="card-badge">{product.category}</span>
                </div>
                <div className="card-body">
                  <div className="card-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#d7a944" color="#d7a944" />
                      ))}
                    </div>
                    <span className="rating-count">({product.reviewsCount})</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p className="material-tag">{product.material}</p>
                  <p className="card-desc-preview">{product.desc}</p>
                  <div className="card-footer">
                    <strong className="card-price">{formatPKR(product.price)}</strong>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(product);
                      }} 
                      className="card-action-btn"
                    >
                      Configure
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Custom Design Builder Form */}
        <section className="custom-design-section" id="custom-design">
          <div className="custom-design-grid">
            <div className="custom-design-intro">
              <span className="accent-label">Bespoke Workshop</span>
              <h2>Request a Custom Jewellery Piece</h2>
              <p>
                Have a specific design in mind or want to replicate a bridal picture? Fill in the details below, and Waseem Ahmad will consult with you on WhatsApp regarding sizing, weight, and metal configurations.
              </p>
              
              <div className="store-info-box">
                <h4><MapPin size={18} className="gold-icon" /> Store Location</h4>
                <p>Nayyab Jewellers, Madina Market, Sarafa Bazar, Gujranwala, Pakistan</p>
                
                <h4><Clock size={18} className="gold-icon" /> Showroom Hours</h4>
                <p>Open Daily: 11:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div className="custom-design-form-container">
              <form onSubmit={handleCustomConsultation} className="custom-form">
                <h3>Design Request Form</h3>
                
                <div className="form-group">
                  <label htmlFor="cus-name">Your Full Name</label>
                  <input 
                    type="text" 
                    id="cus-name"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="e.g. Maryam Ali" 
                    required 
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cus-cat">Jewellery Category</label>
                    <select 
                      id="cus-cat"
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                    >
                      <option>Necklaces</option>
                      <option>Rings</option>
                      <option>Earrings</option>
                      <option>Mala & Chains</option>
                      <option>Bracelets & Bangles</option>
                      <option>Complete Bridal Set</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cus-metal">Desired Metal / Polish</label>
                    <select
                      id="cus-metal"
                      value={customMetal}
                      onChange={(e) => setCustomMetal(e.target.value)}
                    >
                      <option>22K Gold Plated (Premium)</option>
                      <option>21K Gold Plated</option>
                      <option>925 Sterling Silver</option>
                      <option>Artificial/Alloy Coated</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="cus-budget">Approximate Budget Range</label>
                  <select
                    id="cus-budget"
                    value={customBudget}
                    onChange={(e) => setCustomBudget(e.target.value)}
                  >
                    <option>Under Rs. 10,000</option>
                    <option>Rs. 10,000 - Rs. 30,000</option>
                    <option>Rs. 30,000 - Rs. 70,000</option>
                    <option>Rs. 70,000 - Rs. 150,000</option>
                    <option>Rs. 150,000+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="cus-desc">Describe your request (e.g. ring size, engraving, weight)</label>
                  <textarea 
                    id="cus-desc"
                    value={customDesc}
                    onChange={(e) => setCustomDesc(e.target.value)}
                    rows="4" 
                    placeholder="Describe the styling, gemstones, or custom markings you want. You can send reference photos after WhatsApp opens."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  <MessageSquare size={18} /> Send Inquiry to Waseem Ahmad
                </button>

                {customSuccess && (
                  <div className="form-success-banner">
                    <Check size={16} /> Consultation message generated. Opening WhatsApp...
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Why Us section */}
        <section className="why-us" id="why-us">
          <div className="why-us-content">
            <span className="accent-label">Our Legacy</span>
            <h2>Why Choose Nayyab Jewellers?</h2>
            <div className="why-us-grid">
              <div className="why-item">
                <h4>Crafted in Gujranwala</h4>
                <p>Designed and finished by traditional local artisans, carrying legacy patterns forward.</p>
              </div>
              <div className="why-item">
                <h4>Rigorous Quality Assurance</h4>
                <p>Authentic material descriptions and clear metal configurations listed for all products.</p>
              </div>
              <div className="why-item">
                <h4>Flexible Custom Bookings</h4>
                <p>Advance booking available for customized bridal ornaments tailored to theme attire.</p>
              </div>
              <div className="why-item">
                <h4>Quick WhatsApp Delivery Setup</h4>
                <p>Same-day order tracking and validation directly set up through chat.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="reviews" id="reviews">
          <div className="section-head">
            <h2>Customer Reviews</h2>
            <div className="title-divider"></div>
          </div>
          <div className="review-grid">
            {reviews.map((review, index) => (
              <blockquote key={index} className="review-card">
                <div className="stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#d7a944" color="#d7a944" />
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
                <footer className="review-author">
                  <span>{review.name}</span>
                  <span className="review-date">{review.date}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <h3>Nayyab Jewellers</h3>
            <p className="footer-brand-subtitle">Madina Market, Sarafa Bazar, Gujranwala</p>
            <p className="footer-about">Creating exquisite, state-of-the-art jewellery designs in pure metals and modern artificial options since generations.</p>
          </div>
          
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#collection">Collection</a></li>
              <li><a href="#custom-design">Custom Workshop</a></li>
              <li><a href="#why-us">Our Legacy</a></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4>Get In Touch</h4>
            <p><strong>WhatsApp Support:</strong> +92 319 0224901</p>
            <p><strong>Store Address:</strong> Madina Market, Sarafa Bazar, Gujranwala, Pakistan</p>
            <p><strong>Daily Timing:</strong> 11:00 AM - 9:00 PM</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Nayyab Jewellers. All rights reserved. Premium Design Refactor.</p>
        </div>
      </footer>

      {/* Floating Cart Drawer Button */}
      <button 
        className={`floating-cart-btn ${cartItemCount > 0 ? 'visible' : ''}`} 
        onClick={() => setIsCartOpen(true)}
        aria-label="Open Shopping Cart"
      >
        <ShoppingBag size={24} />
        {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
      </button>

      {/* Slide-out Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-drawer-header">
              <h3>Shopping Bag ({cartItemCount})</h3>
              <button className="close-drawer-btn" onClick={() => setIsCartOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="cart-drawer-body">
              {cart.length === 0 ? (
                <div className="empty-cart-message">
                  <ShoppingBag size={48} className="empty-cart-icon" />
                  <p>Your bag is currently empty.</p>
                  <p className="empty-subtext">Add products from our collection to begin.</p>
                  <button className="primary-btn" onClick={() => setIsCartOpen(false)}>Continue Browsing</button>
                </div>
              ) : (
                <ul className="cart-item-list">
                  {cart.map((item) => (
                    <li key={item.cartId} className="cart-item-card">
                      <img src={item.image} alt={item.name} className="cart-item-img" />
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <div className="cart-item-configs">
                          <span>{item.configuredMetal}</span>
                          {item.configuredSize && item.configuredSize !== 'Standard' && (
                            <span>Size: {item.configuredSize}</span>
                          )}
                          {item.configuredNote && (
                            <span className="cart-item-note">Note: "{item.configuredNote}"</span>
                          )}
                        </div>
                        <div className="cart-item-price-qty">
                          <strong className="cart-item-price">{formatPKR(item.price)}</strong>
                          <div className="qty-controls">
                            <button onClick={() => updateQuantity(item.cartId, -1)} aria-label="Decrease quantity">
                              <Minus size={12} />
                            </button>
                            <span>{item.quantity || 1}</span>
                            <button onClick={() => updateQuantity(item.cartId, 1)} aria-label="Increase quantity">
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button 
                        className="cart-item-remove-btn" 
                        onClick={() => removeFromCart(item.cartId)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="cart-totals-summary">
                  <span>Subtotal</span>
                  <strong>{formatPKR(cartTotal)}</strong>
                </div>
                <p className="cart-disclaimer">Insured shipping and order confirmation will be finalized over WhatsApp.</p>
                <a 
                  className="cart-checkout-btn"
                  href={whatsappCartLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Phone size={18} /> Confirm Order on WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Details Modal */}
      {activeProduct && (
        <div className="modal-overlay" onClick={() => setActiveProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveProduct(null)}>
              <X size={20} />
            </button>
            
            <div className="modal-grid">
              <div className="modal-image-wrapper">
                <img src={activeProduct.image} alt={activeProduct.name} />
              </div>

              <div className="modal-details">
                <div className="modal-header-info">
                  <span className="modal-category">{activeProduct.category}</span>
                  <h2>{activeProduct.name}</h2>
                  <div className="card-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#d7a944" color="#d7a944" />
                      ))}
                    </div>
                    <span>({activeProduct.reviewsCount} customer reviews)</span>
                  </div>
                  <strong className="modal-price">{formatPKR(activeProduct.price)}</strong>
                </div>

                <div className="modal-description">
                  <p>{activeProduct.desc}</p>
                </div>

                {/* Specs list */}
                <div className="modal-specs">
                  <h4>Product Specifications:</h4>
                  <ul>
                    <li><strong>Purity/Base:</strong> {activeProduct.specs.purity}</li>
                    <li><strong>Gemstones:</strong> {activeProduct.specs.stone}</li>
                    <li><strong>Estimate Weight:</strong> {activeProduct.specs.weight}</li>
                  </ul>
                </div>

                {/* Configurations */}
                <div className="modal-configs">
                  <div className="config-group">
                    <label>Select Polish / Coating</label>
                    <div className="radio-grid">
                      {[activeProduct.material, '22K Gold Polish', '925 Sterling Silver', 'Rose Gold Plated'].map((metal) => (
                        <button
                          key={metal}
                          type="button"
                          className={`config-chip ${modalMetal === metal ? 'selected' : ''}`}
                          onClick={() => setModalMetal(metal)}
                        >
                          {metal}
                        </button>
                      ))}
                    </div>
                  </div>

                  {activeProduct.category === 'Rings' && (
                    <div className="config-group">
                      <label htmlFor="ring-size">Ring Size (Asian Scale)</label>
                      <select 
                        id="ring-size" 
                        value={modalSize} 
                        onChange={(e) => setModalSize(e.target.value)}
                        className="modal-select-field"
                      >
                        {['5', '6', '7', '8', '9', '10', '11', '12', 'Custom Size'].map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {activeProduct.category === 'Bracelets & Bangles' && (
                    <div className="config-group">
                      <label htmlFor="bangle-size">Bangle / Bracelet Size</label>
                      <select 
                        id="bangle-size" 
                        value={modalSize} 
                        onChange={(e) => setModalSize(e.target.value)}
                        className="modal-select-field"
                      >
                        {['2.2', '2.4', '2.6', '2.8', 'Custom Size'].map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="config-group">
                    <label htmlFor="modal-note">Custom Request / Engraving Note (Optional)</label>
                    <input
                      type="text"
                      id="modal-note"
                      value={modalNote}
                      onChange={(e) => setModalNote(e.target.value)}
                      placeholder="e.g. engrave 'S & H' inside, custom chain length 20 inches"
                      className="modal-input-field"
                    />
                  </div>
                </div>

                <div className="modal-actions">
                  <button className="primary-btn modal-add-cart-btn" onClick={addConfiguredToCart}>
                    Add configured to Bag
                  </button>
                  <a 
                    className="whatsapp-direct-btn" 
                    href={whatsappDirectOrder(activeProduct, modalMetal, modalSize, modalNote)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Phone size={16} /> Buy Now on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}