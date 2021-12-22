import Page from '../Page';
import Subheader from '../../components/Subheader';
import ContactCard from './ContactCard';

export default function Contact() {
    return (
        <Page>

            <Subheader
                title="Contact us"
            />

            <ContactCard/>

        </Page>
    );
}