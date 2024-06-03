const MySecondComponent = () => {
    return <div>
        {/*<h1>Heading 1</h1>*/}
        {/*<h2>Heading 2</h2>*/}
        <H1/>
        <H2/>
        <H3/>
        <H4/>
        <H5/>
        <H6/>
    </div>
}
export default MySecondComponent;

// Props -> Properties -> Аргументы (функции) -> Оъект {key1: value1, key2: value2, key4: value4, keyN: valueN}
const H1 = () => <h1>Heading 1</h1>

const H2 = () => <h2>Heading 2</h2>

const H3 = () => <h3>Heading 3</h3>

const H4 = () => <h4>Heading 4</h4>

const H5 = () => <h5>Heading 5</h5>

const H6 = () => <h6>Heading 6</h6>
