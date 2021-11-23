import styles from './Comments.module.css';
import CommentCard from './CommentCard';

export default function Comments() {

    return (
        <div className="row">
            <div className="col-sm-12  ">
                <div className="comment-container">
                    <span>comments(3)</span>
                    <hr />

                    < CommentCard />
                    < CommentCard />
                    < CommentCard />
                    < CommentCard />

                    <div className="row">
                        <div className="col-sm-2 ">
                            <img src="max-image/happy-client-1.jpg" alt="" className="comment-img img-fluid" />
                        </div>
                        <div className="col-sm-10">
                            <div className="comment-text" >
                                <span> Adam Smith <span className="vr-line" >|</span> <span className="date-span">May 27, 2016</span></span>
                                <p>
                                    If you threw a party - invited everyone you knew. You would see the biggest gift would be from me and the card who does not exist.
                                </p>
                                <p className="reply"> <i className="fas fa-reply"></i> Reply </p>
                            </div>
                        </div>
                        <hr className="comment-line" />
                    </div>

                    <div className="row comment-row except-row">
                        <div className="col-sm-2  ">
                            <img src="max-image/happy-client.jpg" alt="" className="comment-img img-fluid" />
                        </div>
                        <div className="col-sm-10 ">
                            <div className="comment-text" >
                                <span> Eliana Doe <span style={{ color: '#aeaeae' }} >|</span> <span style={{ color: '#f65aa7' }}>Oct 07, 2016</span></span>
                                <p>
                                    Their house is a museum where people come to see ‘em. They really are a scream the Addams Family.
                                </p>
                                <p className="reply"> <i className="fas fa-reply"></i> Reply </p>
                            </div>
                        </div>
                        <hr className="comment-line" />
                    </div>

                    <div className="row comment-row ">
                        <div className="col-sm-2 ">
                            <img src="max-image/happy-client-3.jpg" alt="" className="comment-img img-fluid" />
                        </div>
                        <div className="col-sm-10 ">
                            <div className="comment-text" >
                                <span> Julie Jackey <span style={{ color: '#aeaeae' }} >|</span> <span style={{ color: '#f65aa7' }}>Dec 24, 2016</span></span>
                                <p>
                                    Didn't need no welfare states. Everybody pulled his weight. Gee our old Lasalle ran great. Those were the days.
                                </p>
                                <p className="reply"> <i className="fas fa-reply"></i> Reply </p>
                            </div>
                        </div>
                        <hr className="comment-line" />
                    </div>

                </div>
            </div>
        </div>
    );
}