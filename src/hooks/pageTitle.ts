import { useEffect } from 'react';

function usePageTitle(title: string) {
    useEffect(() => {
        const oldTitle = document.title;
        document.title = title;
        return () => {
            document.title = oldTitle;
        }
    }, [title]);
}

export default usePageTitle;
