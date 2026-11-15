"use client";

import { useState } from "react";
import { ArrowRight, Heart, Menu, Search, ShoppingBag, Sparkles, Truck, ShieldCheck, RotateCcw, X } from "lucide-react";

const product = {
  id: "demo-tote",
  name: "Everyday Carry Tote",
  category: "Bags & Handbags",
  price: 1299,
  compareAt: 1899,
  tag: "DEMO BESTSELLER",
  description: "A roomy everyday tote with a clean, minimal look. Made for workdays, weekend plans and everything in between.",
};

const money = (n:number) => "₹" + n.toLocaleString("en-IN");

export default function Home() {
  const [count, setCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  return <main>
    <div className="announcement">A little something special for your everyday <span>✳</span> Free shipping on your first order</div>
    <header className="header">
      <button className="mobileMenu iconBtn" aria-label="Open menu" onClick={()=>setMenuOpen(!menuOpen)}><Menu/></button>
      <a className="logo" href="/"><span className="logoMark">h.</span> heymybuddy<span className="dot">.</span></a>
      <nav className={menuOpen ? "nav navOpen" : "nav"}>
        <a href="#shop" onClick={()=>setMenuOpen(false)}>New In</a><a href="#shop" onClick={()=>setMenuOpen(false)}>Shop All</a><a href="#story" onClick={()=>setMenuOpen(false)}>Our Story</a>
      </nav>
      <div className="headerActions"><button className="iconBtn searchIcon" aria-label="Search"><Search/></button><button className="iconBtn bagButton" aria-label="Open bag" onClick={()=>setCartOpen(true)}><ShoppingBag/><span className="count">{count}</span></button></div>
    </header>

    <section className="hero">
      <div className="heroCopy">
        <div className="eyebrow"><Sparkles size={15}/> THE EVERYDAY FINDS EDIT</div>
        <h1>Good finds.<br/><em>Good vibes.</em><br/>Hey, buddy.</h1>
        <p>Little upgrades, thoughtful picks and feel-good favourites — all in one happy place.</p>
        <a className="primaryBtn" href="#shop">Explore the collection <ArrowRight size={17}/></a>
        <div className="heroNote">✳ Curated for your everyday</div>
      </div>
      <div className="heroVisual" aria-label="HeyMyBuddy brand artwork">
        <div className="orb orbA"/><div className="orb orbB"/>
        <div className="poster posterBack"><span>YOUR DAILY<br/>DOSE OF<br/>HAPPY</span><b>HB.</b></div>
        <div className="poster posterFront"><div className="sun">✳</div><span>FIND YOUR<br/><strong>HAPPY</strong><br/>THINGS.</span><small>HEYMYBUDDY · EST. 2026</small></div>
        <div className="sticker">made for<br/>your everyday <b>♡</b></div>
      </div>
    </section>

    <section className="benefits">
      <div><Truck/><span><b>Easy delivery</b><small>Across India</small></span></div>
      <div><ShieldCheck/><span><b>Thoughtful picks</b><small>Made for everyday</small></span></div>
      <div><RotateCcw/><span><b>Helpful support</b><small>Here when you need us</small></span></div>
    </section>

    <section className="shop" id="shop">
      <div className="sectionHeading"><div><div className="eyebrow">THE GOOD STUFF</div><h2>Fresh picks for <em>you.</em></h2><p>A little demo collection to get the store started.</p></div><span className="demoPill">DEMO PRODUCT</span></div>
      <article className="productCard">
        <div className="productArt">
          <span className="tag">{product.tag}</span><button className={liked?"heart liked":"heart"} aria-label="Save product" onClick={()=>setLiked(!liked)}><Heart fill={liked?"currentColor":"none"}/></button>
          <div className="tote"><div className="handle"/><div className="toteBody"><span>HB.</span></div></div>
          <div className="artCaption">HEYMYBUDDY FINDS · EVERYDAY EDIT</div>
        </div>
        <div className="productInfo"><div className="category">{product.category}</div><h3>{product.name}</h3><p>{product.description}</p><div className="price"><strong>{money(product.price)}</strong><del>{money(product.compareAt)}</del><span>32% OFF</span></div><button className="addButton" onClick={()=>setCount(count+1)}>Add to bag <span>+</span></button><small className="demoNote">Demo listing · Not yet available for purchase</small></div>
      </article>
    </section>

    <section className="story" id="story"><div className="eyebrow">A LITTLE ABOUT US</div><h2>Everyday things.<br/><em>Extra happy.</em></h2><p>HeyMyBuddy is your happy place for thoughtful finds, useful little upgrades and everyday favourites. We're getting our shelves ready — come back soon for more.</p></section>
    <footer><div className="footerBrand"><a className="logo" href="/"><span className="logoMark">h.</span> heymybuddy<span className="dot">.</span></a><p>Good finds for your everyday life.</p></div><div className="footerLinks"><a href="#shop">Shop</a><a href="#story">About</a><a href="mailto:hello@heymybuddy.in">Contact</a></div><div className="footerBottom">© 2026 HeyMyBuddy. All rights reserved. <span>Made for the everyday ✳</span></div></footer>

    {cartOpen && <div className="shade" onClick={()=>setCartOpen(false)}><aside className="drawer" onClick={e=>e.stopPropagation()}><div className="drawerHead"><h2>Your bag ({count})</h2><button className="iconBtn" onClick={()=>setCartOpen(false)}><X/></button></div>{count===0?<p>Your bag is waiting for a little something.</p>:<><div className="cartLine"><b>{product.name} × {count}</b><strong>{money(product.price*count)}</strong></div><p className="demoNote">This is a demonstration cart. Online payment and order placement are not enabled yet.</p></>}<button className="primaryBtn full" onClick={()=>setCartOpen(false)}>Continue browsing</button></aside></div>}
  </main>;
}