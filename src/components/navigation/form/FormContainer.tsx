
interface FormContainerProps {
    children: React.ReactNode;
};

export function FormContainer({children}: FormContainerProps) {
    return (
        <div>
            {children}
        </div>
    )
}
