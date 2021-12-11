import Page from '../Page';
import Subheader from '../../components/Subheader';
import ContactCard from './ContactCard';
import GoogleMapCard from './GoogleMapCard';
import ContactFromCard from './ContactFormCard';




export default function Contact() {
    return (
        <Page>

            <Subheader
                title="Contact us"
            />

            <ContactCard/>

            <ContactFromCard/>

            <GoogleMapCard/>
        </Page>
    );
}