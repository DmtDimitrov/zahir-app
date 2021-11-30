
import Subheader from '../../components/Subheader';
import ContactCard from './ContactCard';
import GoogleMapCard from './GoogleMapCard';
import ContactFromCard from './ContactFormCard';




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