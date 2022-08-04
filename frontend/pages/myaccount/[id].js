import { useRouter } from 'next/router';
// test
const myAccount = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>

            <p> id: {id}</p>
        </>
    )
}

export default myAccount;