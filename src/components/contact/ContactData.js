

const ContactData = (props) => {
    return(
        <div>
            <h4>{props.text}</h4>
            <h5>{props.contact}</h5>
            <a href={props.url} target='_blank'>Send a message</a>
        </div>
    )
    
}

export default ContactData