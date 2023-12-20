
const DefaultLayout = (props: any) => {
    return (
        <div className="container mx-auto flex py-5">
            <div className="flex-1">
                {props.children}
            </div>
        </div>
    );
}

export default DefaultLayout;