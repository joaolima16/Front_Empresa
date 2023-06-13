import { Modal } from "@mui/material";
import About from "../../Components/AboutCompany";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import SectionObras from "../../Components/SectionObras";
export default function Home(){
    return(
        <>
            <Header />
            <About />
           <SectionObras />
            <Footer />

        </>

    )
}