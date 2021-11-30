
import Subheader from '../../components/Subheader';
import ContactCard from './components/ContactCard';
import GoogleMapCard from './components/GoogleMapCard';
import ContactFromCard from './components/ContactFormCard';




export default function Contact() {
    return (
        <>

            <Subheader
                title="Contact us"
            />

            <ContactCard/>

            <ContactFromCard/>

            <GoogleMapCard/>
        </>
    );
}