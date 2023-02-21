interface Props {
    children: React.ReactNode
}

const ContainerBody = (props: Props) => {
    return (
        <div className="conteiner-body">{props.children}</div>
    )
}

export default ContainerBody;