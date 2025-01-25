import Lists2 from './Lists2';

export default function Lists() {
    const items = [1, 24, 54, 65];
    return (
        <>
            <h1>List 2 component</h1>
            {items.map((item, index) => (
                <Lists2 key={index} data={item} />
            ))}
        </>
    );
}
