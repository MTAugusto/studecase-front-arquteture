import Footer from "../Footer";
import Header from "../Header";

interface Props {
    children: React.ReactNode
}

const Container = (props: Props) => {
    return (
        <>
            <Header />
            <div className="content-pages">{props.children}</div>
            <Footer />
        </>
    )
}

export default Container;