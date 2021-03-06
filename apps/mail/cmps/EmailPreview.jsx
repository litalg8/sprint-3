const { Link } = ReactRouterDOM
import { LongTxt } from '../../../cmps/LongTxt.jsx'
export function EmailPreview({ mail, removeMail, toggleStarMail, toggleReadMail }) {
    return (

        <div className={'mail-preview'}>
            <Link to={`/mail/${mail.id}`}>
                <span>{mail.from}</span>
            </Link>
            <Link to={`/mail/${mail.id}`}>
                <div className="mail-content flex">
                    <LongTxt className="mail-subject" txt={mail.subject} />
                    <LongTxt className="mail-body-preview" txt={mail.body} />
                </div>
            </Link>
            <div className="mail-time">
                {new Date(mail.sentAt).toLocaleDateString('he-IL')}, {new Date(mail.sentAt).toLocaleTimeString('he-IL').slice(0,-3)}
            </div>
            <div>
                {!mail.isStarred && <button className="mail-icon far fa-star " onClick={() => toggleStarMail(mail.id)}></button>}
                {mail.isStarred && <button className="mail-icon fas fa-star " onClick={() => toggleStarMail(mail.id)}></button>}
                {!mail.isRead && <button className="mail-icon fas fa-envelope " onClick={() => toggleReadMail(mail.id)}></button>}
                {mail.isRead && <button className="mail-icon far fa-envelope-open " onClick={() => toggleReadMail(mail.id)}></button>}
                <button className="mail-icon fas fa-trash " onClick={() => removeMail(mail.id)}></button>
            </div>
        </div >



    )
}