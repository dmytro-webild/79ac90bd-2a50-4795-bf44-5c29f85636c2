"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Location",
          id: "location",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Panchakattu Dosa"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Panchakattu Dosa"
      description="Experience authentic, crispy, and traditional South Indian flavors prepared with care and quality."
      imageSrc="http://img.b2bpic.net/free-photo/delicious-indian-dosa-arrangement_23-2149086026.jpg"
      imageAlt="Traditional South Indian Dosa"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/delicious-meal-with-sambal-assortment_23-2149076087.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/potato-lule-with-onion-ketchup_140725-1836.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/delicious-indian-dosa-arrangement_23-2149086024.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-indian-man-bazaar_23-2150913304.jpg",
          alt: "Customer 5",
        },
      ]}
      avatarText="Join 1000+ happy foodies"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Taste the Tradition"
      description="At Panchakattu Dosa, we bring the authentic heritage of South Indian cuisine to your plate. Our recipes are passed down to ensure every bite is perfection."
      bulletPoints={[
        {
          title: "Traditional Recipes",
          description: "Authentic flavors crafted daily.",
        },
        {
          title: "Fresh Ingredients",
          description: "Locally sourced and carefully selected.",
        },
        {
          title: "Culinary Passion",
          description: "Committed to quality in every serving.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/delicious-indian-dosa-arrangement_23-2149086029.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Mass produced food",
          "Compromised quality",
          "Artificial flavors",
        ],
      }}
      positiveCard={{
        items: [
          "Hand-crafted traditional batter",
          "Premium quality ingredients",
          "Authentic home-style flavors",
        ],
      }}
      title="Why Choose Us"
      description="What makes our dosa stand out."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="one-large-right-three-stacked-left"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Masala Dosa",
          price: "$7.99",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-indian-dosa-arrangement_23-2149086027.jpg",
        },
        {
          id: "p2",
          name: "Idli Vada Platter",
          price: "$6.49",
          imageSrc: "http://img.b2bpic.net/free-photo/nutritious-indian-dosa-assortment_23-2149086078.jpg",
        },
        {
          id: "p3",
          name: "Ghee Roast Dosa",
          price: "$8.99",
          imageSrc: "http://img.b2bpic.net/free-photo/nutritious-indian-dosa-arrangement_23-2149086074.jpg",
        },
        {
          id: "p4",
          name: "Plain Dosa",
          price: "$5.99",
          imageSrc: "http://img.b2bpic.net/free-photo/pieces-fried-chicken-near-tasty-sauce_23-2147717047.jpg",
        },
        {
          id: "p5",
          name: "Set Dosa",
          price: "$6.99",
          imageSrc: "http://img.b2bpic.net/free-photo/crispy-bakery-with-various-sauces_140725-2902.jpg",
        },
        {
          id: "p6",
          name: "Butter Dosa",
          price: "$8.49",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-traditional-emirates-breakfast_181624-56747.jpg",
        },
      ]}
      title="Our Signature Menu"
      description="Explore our wide range of traditional dosas and specialties."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Ananya S.",
          role: "Foodie",
          company: "Local Customer",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-eating-dovga-yayla-caucasian-soup-made-from-yogurt_114579-911.jpg",
        },
        {
          id: "2",
          name: "Rohan V.",
          role: "Traveler",
          company: "Visitor",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/crop-smiling-couple-talking-cafe_23-2147826812.jpg",
        },
        {
          id: "3",
          name: "Sunita K.",
          role: "Family Head",
          company: "Regular",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-friends-enjoying-time-together_23-2148395394.jpg",
        },
        {
          id: "4",
          name: "Vikram D.",
          role: "Local Professional",
          company: "Nearby Resident",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/coquette-watercolor-pattern_23-2151843243.jpg",
        },
        {
          id: "5",
          name: "Meera J.",
          role: "Student",
          company: "Frequent Diner",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/meat-plate-with-red-wine_23-2147716909.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "4.8",
          label: "Avg Rating",
        },
        {
          value: "1000+",
          label: "Happy Diners",
        },
        {
          value: "5+",
          label: "Years Active",
        },
      ]}
      title="What Our Diners Say"
      description="Authentic experiences from our beloved patrons."
    />
  </div>

  <div id="location" data-section="location">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "What are your operating hours?",
          content: "We are open daily from 8:00 AM to 10:00 PM.",
        },
        {
          id: "f2",
          title: "Do you offer takeout?",
          content: "Yes, we provide both takeout and delivery services.",
        },
        {
          id: "f3",
          title: "Is parking available?",
          content: "Ample parking is available right in front of our facility.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about our restaurant."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Visit Us"
      title="Ready for a Fresh Dosa?"
      description="Find us at our location or sign up for updates on our special menu items."
      imageSrc="http://img.b2bpic.net/free-photo/top-view-magnifying-glass-compass_23-2148315643.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Panchakattu Dosa"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
