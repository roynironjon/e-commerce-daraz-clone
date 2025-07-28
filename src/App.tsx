import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomePage from "@/pages/HomePage";
import ProductsPage from "@/pages/ProductsPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import AuthPage from "@/pages/AuthPage";
import WishlistPage from "@/pages/WishlistPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import CareersPage from "@/pages/CareersPage";
import PressPage from "@/pages/PressPage";
import BlogPage from "@/pages/BlogPage";
import AffiliateProgram from "@/pages/AffiliateProgram";
import HelpCenter from "@/pages/HelpCenter";
import TrackOrderPage from "@/pages/TrackOrderPage";
import ReturnsPage from "@/pages/ReturnsPage";
import ShippingPage from "@/pages/ShippingPage";
import WarrantyPage from "@/pages/WarrantyPage";
import FAQPage from "@/pages/FAQPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsOfServicePage from "@/pages/TermsOfServicePage";
import CookiePolicyPage from "@/pages/CookiePolicyPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <WishlistProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter basename="/e-commerce-daraz-clone">
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/press" element={<PressPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/affiliate" element={<AffiliateProgram />} />
                    <Route path="/flash-deals" element={<ProductsPage />} />
                    <Route path="/help" element={<HelpCenter />} />
                    <Route path="/track-order" element={<TrackOrderPage />} />
                    <Route path="/returns" element={<ReturnsPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    <Route path="/warranty" element={<WarrantyPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/privacy" element={<PrivacyPolicyPage />} />
                    <Route path="/terms" element={<TermsOfServicePage />} />
                    <Route path="/cookies" element={<CookiePolicyPage />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </BrowserRouter>
          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
