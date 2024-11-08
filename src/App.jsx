import './assets/css/style.css';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Features from './components/Features';
import Container from './components/Container';
import HowItWorks from './components/HowItWorks';
import MoneyTransferSection from './components/MoneyTransferSection';
import FAQSection from './components/FAQSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';



function App() {
  

  return (
    <>
      <Navbar />
      <Showcase />
      <Features />
      <Container />
      <HowItWorks />
      <MoneyTransferSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />

    </>
  )
}

export default App
