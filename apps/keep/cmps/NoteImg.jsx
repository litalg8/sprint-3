


export class NoteImg extends React.Component {
    render() {
        const note = this.props.note;
        return (
            <section>
                <h3>this is note Img!</h3>
                <img src={note.info.url}/>
                <h4>{note.info.title}</h4>
            </section>
        )
    }
}