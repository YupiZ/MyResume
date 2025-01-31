function Button(props) {
    return (
        <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;
