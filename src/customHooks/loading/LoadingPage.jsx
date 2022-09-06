import useLoadingHook from './useLoadingHook';

const useLoadingPage = () => {
    const LOADING = useLoadingHook();
    if (LOADING) return <div>Loading...</div>
    return (
        <div>Finished!!!</div>
    );
}

export default useLoadingPage;