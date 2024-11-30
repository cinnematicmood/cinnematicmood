import MainNavBar from "../components/MainNavBar";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import MainFooter from "../components/MainFooter";
import MyBreadcrumb from "../components/MyBreadcrumb";
import MySlider from "../components/MySlider";
import { Container, Row } from "react-bootstrap";

function Home() {
    return (
        <div>
            <MainNavBar />
            {/* <HeroSection />
            <ProductCard />
            <MainFooter /> */}
            {/* <MyBreadcrumb mainlink="Home" pagename="Homepage" />
            <MyBreadcrumb mainlink="About" pagename="About" /> */}
            <MySlider />
            <Container>
            <Row>
                <Col md={4}><FeatureCard title="Produces Electricity" text="" /></Col>
                <Col md={4}><h1>Column1</h1></Col>
                <Col md={4}><h1>Column1</h1></Col>
            </Row>
            </Container>
        </div>
    );
}

export default Home;