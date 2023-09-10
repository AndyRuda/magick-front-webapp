import React from 'react';
import Alert from 'react-bootstrap/Alert';

type notificationType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

function BasicExample({ type, text, show, timeout = 3000 }: { type: notificationType, text: string, show: boolean, timeout?: number }) {
    const [visibility, setVisibility] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            if (visibility) setVisibility(false)
        }, timeout)
    }, [visibility])

    React.useEffect(() => {
        if (show !== visibility) setVisibility(show)
    }, [show])

    return (
        <>
            {visibility && (
                <Alert key={type} variant={type}>{text}</Alert>
            )}
        </>
    );
}

export default BasicExample;