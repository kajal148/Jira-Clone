interface ButtonProps {
    text: string | undefined;
    onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
    const {text, onClick} = props;

    // if(!onClick) return;

    return (
        <div onClick={onClick} data-testid="button-test">
            Helloo {text}
        </div>
    )
}